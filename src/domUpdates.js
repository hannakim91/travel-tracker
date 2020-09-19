const domUpdates = {
  travelerRepo: null,
  trips: null,
  destinations: null,

  reassignPropertiesWithData(travelerData, tripData, destinationData) {
    this.travelerRepo = travelerData
    this.trips = tripData
    this.destinations = destinationData
    console.log(this)
  }


}

export default domUpdates;