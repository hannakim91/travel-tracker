const domUpdates = {
  travelerRepo: null,
  trips: null,
  destinations: null,

  assignTravelerRepo(data) {
    this.travelerRepo = data
    console.log(this.travelerRepo)
  }


}

export default domUpdates;