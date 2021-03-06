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
    const AGENT_UPCHARGE = 1.1;
    destinationData.forEach(destination => {
      if (this.destinationID === destination.id) {
        const lodgingCost = destination.estimatedLodgingCostPerDay * this.duration * this.travelers
        const flightsCost = destination.estimatedFlightCostPerPerson * this.travelers
        tripCost += lodgingCost
        tripCost += flightsCost
      }
    })
    return parseInt((tripCost * AGENT_UPCHARGE).toFixed(2))
  }

  storeDestinationName(destinationData) {
    const destination = destinationData.find(destination => destination.id === this.destinationID)
    this.destinationName = destination.destination
    this.destinationImage = destination.image
    this.destinationAlt = destination.alt
  }
}

export default Trip;