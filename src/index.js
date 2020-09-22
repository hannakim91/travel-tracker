import './css/styles.scss';
import './images/treble-clef.png';
import fetch from './fetch';
import domUpdates from './domUpdates';
import Traveler from './Traveler';
import TravelerRepo from './TravelerRepo';
import Trip from './Trip';
import Destination from './Destination';

const modalLogInPopup = document.querySelector('.modal-log-in-popup');
const modalLogInTrigger = document.querySelector('.modal-log-in-trigger');
const modalCloseButton = document.querySelector('.modal-close-button');
const changeViewButton = document.querySelector('.change-view-button');
const logInView = document.querySelector('.log-in-view');
const travelerDashboardView = document.querySelector('.traveler-dashboard-view');
const travelerHeader = document.querySelector('.traveler-header');
const addNewTripButton = document.querySelector('.add-new-trip-button');
const viewEstimateButton = document.querySelector('.view-estimate-button');
const newTripForm = document.querySelector('.new-trip-form');

window.addEventListener('load', onWindowLoad);
window.addEventListener('click', windowOnClick);
modalLogInTrigger.addEventListener('click', toggleModal);
modalCloseButton.addEventListener('click', toggleModal);
changeViewButton.addEventListener('click', viewDashboard);

addNewTripButton.addEventListener('click', addNewTripHandler);
viewEstimateButton.addEventListener('click', newTripEstimateHandler);

let travelerRepo;
let trips = [];
let destinations = [];

function onWindowLoad() {
  const user = localStorage.getItem('user')
  if (JSON.parse(localStorage.getItem('loggedIn')) === true && user.includes('traveler')) {
    showTravelerDashboard()
  } 
  else {
    logInView.classList.remove('hidden')
  }
}

function checkLogInDetails() {
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')
  const logInForm = document.querySelector('.modal-content')
  if (username.value.includes('traveler') && password.value === 'travel2020') {
    storeData(username.value)
    showTravelerDashboard()
  } else {
    logInForm.innerHTML += 'Please enter a valid username and password'
  }
}

function storeData(username) {
  localStorage.setItem('loggedIn', true)
  localStorage.setItem('user', username)
}

function showTravelerDashboard() {
  travelerDashboardView.classList.remove('hidden')
  travelerHeader.classList.remove('hidden');
  logInView.classList.add('hidden')
  populateDom()
}

function populateDom() {
  return fetch.getAllData()
    .then(data => {
      console.log(data)
      let travelers = [];
      data.travelerData.travelers.forEach(traveler => {
        const person = new Traveler(traveler)
        travelers.push(person)
        travelerRepo = new TravelerRepo(travelers)
      })
      data.tripData.trips.forEach(trip => {
        const journey = new Trip(trip)
        trips.push(journey)
      })
      data.destinationData.destinations.forEach(destination => {
        const location = new Destination(destination)
        destinations.push(location)
      })
    })
    .then(() => domUpdates.reassignPropertiesWithData(travelerRepo, trips, destinations))
    .then(() => domUpdates.generateTravelerDashboard())
    .catch(err => console.log(err.message));
}

function toggleModal() {
  modalLogInPopup.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modalLogInPopup) {
    toggleModal();
  }
  handleLogOutClick(event);
}

function viewDashboard(event) {
  event.preventDefault();
  toggleModal()
  checkLogInDetails()
}

function handleLogOutClick(event) {
  if (event.target.id === 'log-out-button') {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    domUpdates.clearTravelerInfo();
    travelerDashboardView.classList.add('hidden');
    travelerHeader.classList.add('hidden');
    logInView.classList.remove('hidden');
  }
  //empty all the travelerDashboard innerHTML
}

function addNewTripHandler(event) {
  event.preventDefault()
  if (newTripForm.checkValidity()) {
    updateTravelerTrips()
  } else {
    alert('Please enter all form inputs')
  }
}

function updateTravelerTrips() {
  const newTrip = formatNewTrip()
  console.log(newTrip)
  const destinationName = getDestinationName(domUpdates.destinations, newTrip)
  domUpdates.appendPendingTrip(newTrip, destinationName)
  return fetch.postNewTrip(newTrip)
    .catch(err => console.log(err.message));
}

function createRandomTripId() {
  return Math.floor(1000 + Math.random() * 9000)
}

function formatNewTrip() {
  const startDateInput = document.getElementById('date-input').value
  const durationInput = document.getElementById('duration-input').value
  const numTravelersInput = document.getElementById('travelers-input').value
  const destinationIDInput = document.getElementById('destination-select').value
  console.log(startDateInput, destinationIDInput)
  const formatDate = startDateInput.replace(/-/g, '\/')
  const newTrip = {
    id: createRandomTripId(),
    destinationID: +destinationIDInput,
    travelers: +numTravelersInput,
    date: formatDate,
    duration: +durationInput,
    status: 'pending',
    suggestedActivities: [],
    userID: domUpdates.currentTraveler.id
  }
  return newTrip
}

function getDestinationName(destinationData, trip) {
  return destinationData.find(destination => destination.id === trip.destinationID).destination
}

function generateEstimateTripCost() {
  const estimateData = formatNewTrip()
  const potentialTrip = new Trip(estimateData)
  const potentialCost = potentialTrip.calculateTripCost(domUpdates.destinations)
  console.log(potentialCost)
  domUpdates.generateTripEstimate(potentialCost)
}

function newTripEstimateHandler(event) {
  //check if date picked is date in future**
  event.preventDefault()
  if (newTripForm.checkValidity()) {
    generateEstimateTripCost()
  } else {
    alert('Please enter all form inputs')
  }
}

function cancelTrip(event) {
  return fetch.deleteTrip(idToDelete)
}

function getTodaysDate() {
  let date = new Date()
  let day = date.getDate()
  let month = (date.getMonth() + 1)
  if (day < 10) {
    day = `0${day}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  let today = `${date.getFullYear()}/${month}/${day}`
  document.getElementById('date-input').setAttribute('min', today)
  return today
}