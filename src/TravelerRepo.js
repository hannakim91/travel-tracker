class TravelerRepo {
  constructor(data) {
    this.travelers = data
  }

  findTrips(id, tripData) {
    const tripsByUserId = tripData.filter(trip => trip.userID === id)
    return tripsByUserId
  }
}
export default TravelerRepo