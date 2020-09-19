 

// dest
//https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
const getTravelersData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    .then(data => data.userData)
    .catch(err => console.log(err.message))
};

const getTripData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
    .then(data => data.tripData)
    .catch(err => console.log(err.message))
}

export default {
  getTravelersData
}
