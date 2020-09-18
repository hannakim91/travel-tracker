import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler';
import TravelerRepo from '../src/TravelerRepo';
import travelerData from './test-data/traveler-data';
import tripData from './test-data/trip-data';

describe('TravelerRepo class and methods', function() {

  let travelerRepo;
  let traveler1;
  let traveler2;
  let traveler3;
  let travelers;
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0])
    traveler2 = new Traveler(travelerData[1])
    traveler3 = new Traveler(travelerData[2])
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
    expect(travelerRepo.findTrips(traveler1, tripData)).to.deep.equal([tripData[0], tripData[1], tripData[2], tripData[3], tripData[16], tripData[18]]);
  });
});
