class TravelerRepo {
  constructor(data) {
    this.travelers = data
  }

  findUserTrips(traveler, tripData) {
    const tripsByUserId = tripData.filter(trip => trip.userID === traveler.id)
    traveler.trips = tripsByUserId
  }
}
export default TravelerRepo