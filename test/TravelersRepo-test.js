import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/TravelersRepo';
import TravelerRepo from '../src/TravelersRepo';
import travelersData from './test-data/travelers-data';
import tripsData from './test-data/trips-data';

describe('TravelersRepo class and methods', function() {

  let travelerRepo;
  let traveler1;
  let traveler2;
  let traveler3;
  let travelers;
  beforeEach(() => {
    traveler1 = new Traveler(travelersData[0])
    traveler2 = new Traveler(travelersData[1])
    traveler3 = new Traveler(travelersData[2])
    travelers = [traveler1, traveler2, traveler3]
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
    expect(travelerRepo.travelers[0]).to.deep.equal(traveler1)
  });

  it('should return a list of trips for a given traveler', () => {
    console.log(traveler1)
    expect(travelerRepo.findTrips(traveler1, tripsData)).to.deep.equal([tripsData[0], tripsData[1], tripsData[2], tripsData[3], tripsData[16], tripsData[18]]);
  });
});
