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
    this.currentTraveler = this.travelerRepo.travelers[25]
    this.generateTravelerWelcome()
    this.generateTravelerTrips()
    this.generateTravelerSpending()
    this.generateDestinationDropdown()
  },

  generateTravelerWelcome() {
    const travelerWelcomeSection = document.querySelector('.traveler-welcome')
    travelerWelcomeSection.innerHTML += `<h2>Welcome ${this.currentTraveler.name}!</h2>`
  },

  generateTravelerTrips() {
    const travelerTripsSection = document.querySelector('.traveler-trip-cards')
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
  },

  generateTravelerSpending() {
    const travelerSpendingAside = document.querySelector('.traveler-spending')
    travelerSpendingAside.innerHTML = `
    <h3>2019 Spending</h3>
      $${this.travelerRepo.calculateAnnualSpend(this.currentTraveler, 2019, this.destinations)}.00
    <h3>2020 Spending</h3>
      $${this.travelerRepo.calculateAnnualSpend(this.currentTraveler, 2020, this.destinations)}.00
    `
  },
  
  generateDestinationDropdown() {
    const dropdown = document.getElementById('destination-select')
    this.destinations.forEach(destination => {
      dropdown.innerHTML += `
      <option class="${destination.id}" value="${destination.id}">${destination.destination}</option>
    `
    })
  },

  generateTripEstimate(estimate) {
    const estimateCost = `
      <section class="new-trip-input estimate-cost">
        <h4>Estimate Cost: $${estimate}.00</h4>
      `
    document.querySelector('.new-trip-buttons').insertAdjacentHTML('beforebegin', estimateCost)
  },

  appendPendingTrip(trip, destinationName) {
    const travelerTripsSection = document.querySelector('.traveler-trip-cards')
    travelerTripsSection.innerHTML += `      
    <article class="traveler-trip-card">
      <h4>Trip Start Date: ${trip.date}</h4>
      <h5>${destinationName}</h5>
      <p>Days Traveled: ${trip.duration}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Status: ${trip.status}</p>
    </article>
  `
  }
}

export default domUpdates;