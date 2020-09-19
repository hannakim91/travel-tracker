import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import destinationData from './test-data/destination-data';

describe('Traveler class and methods', function() {

  let destination;

  beforeEach(() => {
    destination = new Destination(destinationData[0]);
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destination).to.be.an.instanceof(Destination);
  });

  it('should initialize with provided data', () => {
    expect(destination.id).to.equal(7);
    expect(destination.destination).to.equal('Emmet Sandham');
    expect(destination.estimatedLodgingCostPerDay).to.equal('relaxer');
    expect(destination.estimatedFlightCostPerPerson).to.equal('relaxer');
    expect(destination.image).to.equal('relaxer');
    expect(destination.alt).to.equal('relaxer');
  });
});


    //sad path test - what if a prop is missing