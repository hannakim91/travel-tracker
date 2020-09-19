import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler';
import TravelerRepo from '../src/TravelerRepo';
import travelerData from './test-data/traveler-data';
// import tripData from './test-data/trip-data';
// import destinationData from './test-data/destination-data';

describe('Traveler class and methods', function() {

  let traveler1;
  // let traveler2;
  // let traveler3;
  // let travelers;
  // let travelerRepo;
  
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0]);
    // traveler2 = new Traveler(travelerData[2]);
    // traveler3 = new Traveler(travelerData[6]);
    // travelers = [traveler1, traveler2, traveler3];
    // travelerRepo = new TravelerRepo(travelers);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceof(Traveler);
  });

  it('should initialize with an id, name, and traveler type', () => {
    expect(traveler1.id).to.equal(7);
    expect(traveler1.name).to.equal('Emmet Sandham');
    expect(traveler1.travelerType).to.equal('relaxer');
  });

  it('should be able to store an array of trips', () => {
    expect(traveler1.trips).to.deep.equal([]);
  });
});
