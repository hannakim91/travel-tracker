import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler';
import travelersData from './test-data/travelers-data';

describe.only('Traveler class and methods', function() {

  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelersData[0]);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  });

  it('should initialize with an id, name, and traveler type', () => {
    expect(traveler.id).to.equal(7);
    expect(traveler.name).to.equal('Emmet Sandham');
    expect(traveler.travelerType).to.equal('relaxer');
  });

  
});
