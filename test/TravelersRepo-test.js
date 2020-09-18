import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/TravelersRepo';
import TravelersRepo from '../src/TravelersRepo';
import travelersData from './test-data/travelers-data';
import tripsData from './test-data/trips-data';

describe('TravelersRepo class and methods', function() {

  let travelersRepo;
  let traveler1;
  let traveler2;
  let traveler3;
  let travelers;
  beforeEach(() => {
    traveler1 = new Traveler(travelersData[0])
    traveler2 = new Traveler(travelersData[1])
    traveler3 = new Traveler(travelersData[2])
    travelers = [traveler1, traveler2, traveler3]
    travelersRepo = new TravelersRepo(travelers);
  });

  it('should be a function', () => {
    expect(TravelersRepo).to.be.a('function');
  });

  it('should be an instance of TravelersRepo', () => {
    expect(travelersRepo).to.be.an.instanceof(TravelersRepo);
  });

  it('should initialize with an array of Travelers', () => {
    expect(travelersRepo.travelers.length).to.equal(3);
    expect(travelersRepo.travelers[0]).to.deep.equal(traveler1)
  });

  it('should return a list of trips for a given user\'s id #', () => {
    expect(travelersRepo.findTrips(7, tripsData)).to.deep.equal([]);
  });
});
