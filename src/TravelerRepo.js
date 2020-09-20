class TravelerRepo {
  constructor(data) {
    this.travelers = data;
  }

  findUserTrips(traveler, tripData) {
    const tripsByUserId = tripData.filter(trip => trip.userID === traveler.id)
    traveler.trips = tripsByUserId;
  }

  calculateAnnualSpend(user, year, destinationData) {
    return user.trips.reduce((annualCost, trip) => {
      if (trip.date.includes(year)) {
        annualCost += trip.calculateTripCost(destinationData)
      }
      return annualCost
    }, 0)
  }

}
export default TravelerRepo;

// loop through each trip in user.trips array
// if trip.date includes year
  // match trip.id to each destination.id
    // multiply destination.estimatedLodgingCostPerDay * trip.duration * trip.travelers to get total lodging cost
    // multiply destination.estimatedFlightCostPerPerson * trip.travelers for total flight cost -- helper methods?
// add up costs for all trips in traveler.trips
// add 10% for manager fee