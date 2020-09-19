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

window.addEventListener('load', fetchApiData);

let travelers = [];
let trips;
let destinations;

function fetchApiData() {
  return fetch.getTravelerData()
    .then(data => {
      data.travelers.forEach(traveler => {
        let person = new Traveler(traveler)
        travelers.push(person)
      })
    })
    .then(() => domUpdates.assignTravelerRepo(travelers))
    .catch(err => console.log(err.message));
}

