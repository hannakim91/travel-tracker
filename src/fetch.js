 

//trips
//https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips

// dest
//https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
const getTravelersData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    .then(data => data.ingredientsData)
    .catch(err => console.log(err.message))
};

export default {
  getTravelersData
}
