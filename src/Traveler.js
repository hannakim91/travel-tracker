class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name
    this.travelerType = data.travelerType;
    this.trips = [];
  }

  addNewTrip(input) {
    const newTrip = {
      destinationID: input.destinationID,
      travelers: input.travelers,
      date: input.dates,
      duration: input.duration,
      status: 'pending',
      suggestedActivities: []
    }
    return newTrip
  }
}
export default Traveler;