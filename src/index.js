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

console.log('This is the JavaScript entry file - your code begins here.');

window.addEventListener('load', populateDom);

let travelerRepo;
let trips;
let destinations;

function populateDom() {
  return fetch.getAllData()
    .then(data => {
      let travelers = [];
      data.travelerData.travelers.forEach(traveler => {
        const person = new Traveler(traveler)
        travelers.push(person)
        travelerRepo = new TravelerRepo(travelers)
      })
      trips = data.tripData.trips
      destinations = data.destinationData.destinations
    })
    .then(() => domUpdates.reassignPropertiesWithData(travelerRepo, trips, destinations))
    .catch(err => console.log(err.message));
}

