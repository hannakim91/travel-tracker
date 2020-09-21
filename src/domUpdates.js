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
    this.currentTraveler = this.travelerRepo.travelers[30]
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

  formatNewTrip() {
    const startDateInput = document.getElementById('date-input').value
    const durationInput = document.getElementById('duration-input').value
    const numTravelersInput = document.getElementById('travelers-input').value
    const destinationIDInput = document.getElementById('destination-select').value
    
    const formatDate = startDateInput.replace(/-/g, '\/')
    
    const newTrip = {
      id: this.createRandomTripId(),
      destinationID: +destinationIDInput,
      travelers: +numTravelersInput,
      date: formatDate,
      duration: +durationInput,
      status: 'pending',
      suggestedActivities: [],
      userID: domUpdates.currentTraveler.id
    }
    return newTrip
  },
  
  createRandomTripId() {
    return Math.floor(1000 + Math.random() * 9000)
  },

  generateEstimateTripCost() {
    const estimateData = this.formatNewTrip()
    const potentialTrip = new Trip(estimateData)
    console.log(potentialTrip)
    // create a new Trip with data to calculate cost
    //need to be in domUpdates so it has access to data ugh
  }
}

export default domUpdates;