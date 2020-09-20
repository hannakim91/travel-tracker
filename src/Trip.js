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
    destinationData.forEach(destination => {
      if (trip.destinationID === destination.id) {
        const lodgingCost = destination.estimatedLodgingCostPerDay * trip.duration * trip.travelers
        const flightsCost = destination.estimatedFlightCostPerPerson * trip.travelers
        annualCost += lodgingCost
        annualCost += flightsCost
      }
    })
  }
}

export default Trip;