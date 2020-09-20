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