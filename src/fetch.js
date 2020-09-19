const getTravelerData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    // .then(data => data))
    .catch(err => console.log(err.message));
};

const getTripData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
    .then(data => data.tripData)
    .catch(err => console.log(err.message));
}

const getDestinationData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
    .then(data => data.destinationsData)
    .catch(err => console.log(err.message));
}

const getAllData = () => {
  return Promise.all([getTravelerData(), getTripData(), getDestinationData()])
    .then(response => {
      const allData = {};
      allData.travelerData = response[0];
      allData.tripData = response[1];
      allData.destinationData = response[2];
      return allData;
    })
    .catch(err => console.log(err.message));
}
export default {
  getTravelerData,
  getTripData,
  getDestinationData,
  getAllData
}


