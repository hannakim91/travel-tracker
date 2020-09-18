import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler';
import travelersData from './test-data/travelers-data';

describe('Traveler class and methods', function() {

  let traveler;

  beforeEach(() => {
    traveler = new Traveler();
    console.log(travelersData)
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  });

  it('should initialize with an id', () => {
    expect(traveler.id).to.equal(595736);
  });
});
