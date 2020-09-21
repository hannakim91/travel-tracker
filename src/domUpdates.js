const domUpdates = {
  travelerRepo: null,
  trips: null,
  destinations: null,

  reassignPropertiesWithData(travelerData, tripData, destinationData) {
    this.travelerRepo = travelerData
    this.trips = tripData
    this.destinations = destinationData
    console.log(this)
  },

  generateTravelerDashboard() {
    this.generateTravelerWelcome()
  },

  generateTravelerWelcome() {
    const travelerWelcome = document.querySelector('.traveler-welcome')
    travelerWelcome.innerHTML += `<h2>Welcome ${this.travelerRepo.travelers[30].name}!</h2>`
  }


}

export default domUpdates;