class Trip {
  constructor(data) {
    this.id = data.id;
    this.userID = data.userID;
    this.destinationID = data.destinationID;
    this.travelers = data.travelers;
    this.date = data.date;
    this.duration = data.duration;
    this.status = data.status;
    this.suggestedActivities = data.suggestedActivities;

  }

  calculateTripCost(destinationData) {
    let tripCost = 0;
    destinationData.forEach(destination => {
      if (this.destinationID === destination.id) {
        const lodgingCost = destination.estimatedLodgingCostPerDay * this.duration * this.travelers
        const flightsCost = destination.estimatedFlightCostPerPerson * this.travelers
        tripCost += lodgingCost
        tripCost += flightsCost
      }
    })
    return tripCost
  }
}

export default Trip;