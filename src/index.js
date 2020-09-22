// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/treble-clef.png';
import fetch from './fetch';
import domUpdates from './domUpdates';
import Traveler from './Traveler';
import TravelerRepo from './TravelerRepo';
import Trip from './Trip';
import Destination from './Destination';

console.log('This is the JavaScript entry file - your code begins here.');

const travelerDashboardView = document.querySelector('.traveler-dashboard-view');
const travelerHeader = document.querySelector('.traveler-header');
const logInView = document.querySelector('.log-in-view');
const addNewTripButton = document.querySelector('.add-new-trip-button');
const viewEstimateButton = document.querySelector('.view-estimate-button');

window.addEventListener('load', onWindowLoad);
addNewTripButton.addEventListener('click', addNewTrip);
viewEstimateButton.addEventListener('click', getTripEstimate);

let travelerRepo;
let trips = [];
let destinations = [];

function onWindowLoad() {
  const user = localStorage.getItem('user')
  console.log(user)
  if (JSON.parse(localStorage.getItem('loggedIn')) === true && user.includes('traveler')) {
    showTravelerDashboard()
  } 
  // else if (JSON.parse(localStorage.getItem('loggedIn')) === true && localStorage.getItem('user') === 'manager') {
  //   showManagerDashboard()
  // } 
  else {
    logInView.classList.remove('hidden')
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

function addNewTrip(event) {
  event.preventDefault()
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

function getTripEstimate(event) {
  event.preventDefault()
  generateEstimateTripCost()
}

function generateEstimateTripCost() {
  const estimateData = formatNewTrip()
  const potentialTrip = new Trip(estimateData)
  const potentialCost = potentialTrip.calculateTripCost(domUpdates.destinations)
  console.log(potentialCost)
  domUpdates.generateTripEstimate(potentialCost)
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