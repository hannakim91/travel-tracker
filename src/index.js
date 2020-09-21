// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import fetch from './fetch';
import domUpdates from './domUpdates';
import Traveler from './Traveler';
import TravelerRepo from './TravelerRepo';
import Trip from './Trip';
import Destination from './Destination';

console.log('This is the JavaScript entry file - your code begins here.');

const addNewTripButton = document.querySelector('.add-new-trip-button');

window.addEventListener('load', populateDom);
addNewTripButton.addEventListener('click', addNewTrip);

let travelerRepo;
let trips = [];
let destinations = [];

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

function addNewTrip(event) {
  event.preventDefault()
  getTripInputs()
  return fetch.postNewTrip()
    .catch(err => console.log(err.message));
}

function getTripInputs() {
  const startDateInput = document.getElementById('date-input').value
  const durationInput = document.getElementById('duration-input').value
  const numTravelersInput = document.getElementById('travelers-input').value
  const destinationIDInput = document.getElementById('destination-select').value
  
  const formatDate = startDateInput.replace(/-/g, '\/')
  
  const newTrip = {
    id: createRandomTripId(),
    destinationID: +destinationIDInput,
    travelers: +numTravelersInput,
    date: formatDate,
    duration: +durationInput,
    status: 'pending',
    suggestedActivities: []
  }
  console.log(newTrip)

}

function createRandomTripId() {
  return Math.floor(1000 + Math.random() * 9000)
}


// pull data from event object, input values -- construct an object
// Traveler.addNewTrip -- gets moved into addNewTrip function 
//how to get inputs from form - put it into right format for newTrip and call addNewTrip
//
