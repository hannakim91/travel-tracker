class TravelerRepo {
  constructor(data) {
    this.travelers = data
  }

  findTrips(traveler, tripData) {
    const tripsByUserId = tripData.filter(trip => trip.userID === traveler.id)
    return tripsByUserId
  }
}
export default TravelerRepo