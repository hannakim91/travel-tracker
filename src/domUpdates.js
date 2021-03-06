const domUpdates = {
  todaysDate: null,
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

  clearTravelerInfo() {
    const travelerWelcomeSection = document.querySelector('.traveler-welcome')
    travelerWelcomeSection.innerHTML = '';

    const travelerTripsSection = document.querySelector('.traveler-trip-cards')
    travelerTripsSection.innerHTML = '';
  },

  generateTravelerDashboard() {
    const username = localStorage.getItem('user')
    const loggedInId = parseInt(username.replace(/traveler/g, ''));
    this.currentTraveler = this.travelerRepo.travelers.find(traveler => traveler.id === loggedInId)
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
    const tripStatus = document.getElementById('#trip-status');
    console.log(tripStatus)
    this.travelerRepo.findUserTrips(this.currentTraveler, this.trips)
    this.travelerRepo.sortUserTrips(this.currentTraveler)
    this.currentTraveler.trips.forEach(trip => {
      trip.storeDestinationName(this.destinations)
      // if (trip.status === 'approved') {
      //   tripStatus.classList.add()
      // } else {
      //   tripStatus.classList.add()
      // }
      travelerTripsSection.innerHTML += `
      <article class="traveler-trip-card">
        <img class="trip-card-image" src="${trip.destinationImage}" alt="${trip.destinationAlt}">
        <h4>${trip.destinationName}</h4>
        <h5>Trip Start Date: ${trip.date}</h5>
        <p>Days Traveled: ${trip.duration}</p>
        <p>Travelers: ${trip.travelers}</p>
        <p id="trip-status">Status: <b>${trip.status}</b></p>
      </article>
      `
    })

  },

  generateTravelerSpending() {
    const travelerSpendingAside = document.querySelector('.traveler-spending')
    travelerSpendingAside.innerHTML = `
    <p>2019 Spending:
      $${this.travelerRepo.calculateAnnualSpend(this.currentTraveler, 2019, this.destinations)}.00</p>
    <p>2020 Spending:
      $${this.travelerRepo.calculateAnnualSpend(this.currentTraveler, 2020, this.destinations)}.00</p>
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
      <section class="estimate-cost">
        <h4>Estimate Cost: $${estimate}.00</h4>
      `
    const newTripEstimateSection = document.querySelector('.new-trip-estimate')
    newTripEstimateSection.innerHTML = estimateCost
  },

  appendPendingTrip(trip, destinationName) {
    const travelerTripsSection = document.querySelector('.traveler-trip-cards')
    travelerTripsSection.insertAdjacentHTML('afterbegin', `      
    <article class="traveler-trip-card">
      <h4>${destinationName}</h4>
      <h5>Trip Start : ${trip.date}</h5>
      <p>Days Traveled: ${trip.duration}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Status: ${trip.status}</p>
    </article>
  `)
  }
}

export default domUpdates;