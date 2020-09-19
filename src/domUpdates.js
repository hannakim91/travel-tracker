const domUpdates = {
  travelerRepo: null,
  trips: null,
  destinations: null,

  reassignPropertiesWithData(data) {
    this.travelerRepo = data
    console.log(this.travelerRepo)
  }


}

export default domUpdates;