const domUpdates = {
  travelerRepo: null,
  trips: null,
  destinations: null,
  currentTraveler: null,

  reassignPropertiesWithData(travelerData, tripData, destinationData) {
    this.travelerRepo = travelerData
    this.trips = tripData
    this.destinations = destinationData
    console.log(this)
  },

  generateTravelerDashboard() {
    this.currentTraveler = this.travelerRepo.travelers[20]
    this.generateTravelerWelcome()
    this.generateTravelerTrips()
  },

  generateTravelerWelcome() {
    const travelerWelcomeSection = document.querySelector('.traveler-welcome')
    travelerWelcomeSection.innerHTML += `<h2>Welcome ${this.currentTraveler.name}!</h2>`
  },

  generateTravelerTrips() {
    const travelerTripsSection = document.querySelector('.traveler-trips')
    this.travelerRepo.findUserTrips(this.currentTraveler, this.trips)
    this.currentTraveler.trips.forEach(trip => {
      trip.storeDestinationName(this.destinations)
      travelerTripsSection.innerHTML += `
      <article class="traveler-trip-card">
        <h4>Trip Start Date: ${trip.date}</h4>
        <h5>${trip.destinationName}</h5>
        <p>Days Traveled: ${trip.duration}</p>
        <p>Travelers: ${trip.travelers}</p>
        <p>Status: ${trip.status}</p>
      </article>
      `
    })
  }
  
  //card with traveler's trip details: location, travelers, start date, duration, status, price
  //need to get destination name from destination ID #
}

export default domUpdates;