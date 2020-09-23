import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import destinationData from './test-data/destination-data';

describe('Destination class and methods', function() {

  let destination1;
  let destination2;

  beforeEach(() => {
    destination1 = new Destination(destinationData[0]);
    destination2 = new Destination(destinationData[1]);
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destination1).to.be.an.instanceof(Destination);
  });

  it('should initialize with provided data', () => {
 
    expect(destination1.id).to.equal(15);
    expect(destination1.destination).to.equal('Manila, Philippines');
    expect(destination1.estimatedLodgingCostPerDay).to.equal(40);
    expect(destination1.estimatedFlightCostPerPerson).to.equal(900);
    expect(destination1.image).to.equal('https://images.unsplash.com/photo-1555557356-51c5d7a8f4c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    expect(destination1.alt).to.equal('colorful buildings near the water with docked boats');
  });

  it('should show undefined if some data is missing', () => {
    expect(destination2.alt).to.equal('scenic photo of Bangkok, Thailand')
  });
});
