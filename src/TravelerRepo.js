class TravelerRepo {
  constructor(data) {
    this.travelers = data
  }

  findUserTrips(traveler, tripData) {
    const tripsByUserId = tripData.filter(trip => trip.userID === traveler.id)
    traveler.trips = tripsByUserId
  }

  calculateAnnualSpend(user, year, destinationData) {
    const annualCost = user.trips.reduce((annualCost, trip) => {
      if (trip.date.includes(year)) {
        destinationData.forEach(destination => {
          if (trip.destinationID === destination.id) {
            const lodgingCost = destination.estimatedLodgingCostPerDay * trip.duration * trip.travelers
            const flightsCost = destination.estimatedFlightCostPerPerson * trip.travelers
            annualCost += lodgingCost
            annualCost += flightsCost
          }
        })
      }
      return annualCost
    }, 0)
    const costPlusFee = parseInt((annualCost * 1.1).toFixed(2))
    return costPlusFee
  }

}
export default TravelerRepo

// loop through each trip in user.trips array
// if trip.date includes year
  // match trip.id to each destination.id
    // multiply destination.estimatedLodgingCostPerDay * trip.duration * trip.travelers to get total lodging cost
    // multiply destination.estimatedFlightCostPerPerson * trip.travelers for total flight cost -- helper methods?
// add up costs for all trips in traveler.trips
// add 10% for manager fee