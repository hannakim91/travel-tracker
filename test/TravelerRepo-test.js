import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler';
import TravelerRepo from '../src/TravelerRepo';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
import travelerData from './test-data/traveler-data';
import tripData from './test-data/trip-data';
import destinationData from './test-data/destination-data';

describe('TravelerRepo class and methods', function() {

  let travelerRepo;
  let traveler1;
  let traveler2;
  let traveler3;
  let travelers;
  let destinations = [];
  const trips = [];
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0]);
    traveler2 = new Traveler(travelerData[2]);
    traveler3 = new Traveler(travelerData[6]);
    travelers = [traveler1, traveler2, traveler3];
    travelerRepo = new TravelerRepo(travelers);
  });

  it('should be a function', () => {
    expect(TravelerRepo).to.be.a('function');
  });

  it('should be an instance of TravelersRepo', () => {
    expect(travelerRepo).to.be.an.instanceof(TravelerRepo);
  });

  it('should initialize with an array of Travelers', () => {
    expect(travelerRepo.travelers.length).to.equal(3);
    expect(travelerRepo.travelers[0]).to.deep.equal(traveler1);
  });

  it('should find and store a list of trips for a given traveler', () => {
    tripData.forEach(trip => {
      const journey = new Trip(trip)
      trips.push(journey)
    })
    travelerRepo.findUserTrips(traveler1, trips);
    expect(traveler1.trips).to.deep.equal([trips[0], trips[1], trips[2], trips[3], trips[16], trips[18]]);
  });

  it('should not modify a traveler\'s trips if no trips match their id', () => {
    travelerRepo.findUserTrips(traveler3, trips);
    expect(traveler3.trips).to.deep.equal([]);
  });

  it('should be able to calculate annual trip spend for a given user', () => {

    destinationData.forEach(destination => {
      const location = new Destination(destination)
      destinations.push(location)
    })

    travelerRepo.findUserTrips(traveler1, trips)
    expect(travelerRepo.calculateAnnualSpend(traveler1, 2020, destinations)).to.equal(21703)
  })
});
