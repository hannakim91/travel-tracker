import chai from 'chai';
const expect = chai.expect;

import Travelers from '../src/TravelersRepo';
import TravelersRepo from '../src/TravelersRepo';
import travelersData from './test-data/travelers-data';

describe('Traveler class and methods', function() {

  let travelersRepo;

  beforeEach(() => {
    travelersRepo = new TravelersRepo();
  });

  it('should be a function', () => {
    expect(TravelersRepo).to.be.a('function');
  });

  it('should be an instance of TravelersRepo', () => {
    expect(travelersRepo).to.be.an.instanceof(TravelersRepo);
  });

});
