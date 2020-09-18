import chai from 'chai';
import Traveler from '../src/Traveler';
const expect = chai.expect;

import Travelers from '../src/TravelersRepo';
import TravelersRepo from '../src/TravelersRepo';
import travelersData from './test-data/travelers-data';

describe('Traveler class and methods', function() {

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

});
