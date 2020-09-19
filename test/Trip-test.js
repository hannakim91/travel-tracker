import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip';
import tripData from './test-data/trip-data';

describe('Trip class and methods', function() {

  let trip1;
  let trip2;

  beforeEach(() => {
    trip1 = new Trip(tripData[0]);
    trip2 = new Trip(tripData[1]);
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceof(Trip);
  });

  it('should initialize with provided data', () => {
 
    expect(trip1.id).to.equal(15);
    expect(trip1.destination).to.equal('Manila, Philippines');
    expect(trip1.estimatedLodgingCostPerDay).to.equal(40);
    expect(trip1.estimatedFlightCostPerPerson).to.equal(900);
    expect(trip1.image).to.equal('https://images.unsplash.com/photo-1555557356-51c5d7a8f4c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    expect(trip1.alt).to.equal('colorful buildings near the water with docked boats');
  });