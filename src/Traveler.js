class Traveler {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.travelerType = data.travelerType
    this.trips = []
  }

  calculateAnnualSpend(destinationData) {
    // add up lodging and flight from destinationData
    // add 10% for manager fee
  }
}
export default Traveler