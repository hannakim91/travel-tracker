import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip';
import Destination from '../src/Destination';
import tripData from './test-data/trip-data';
import destinationData from './test-data/destination-data';

describe.only('Trip class and methods', function() {

  let trip1;
  let destinations = []

  before(() => {
    trip1 = new Trip(tripData[0]);
    destinationData.forEach(destination => {
      const location = new Destination(destination)
      destinations.push(location)
    })
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceof(Trip);
  });

  it('should initialize with provided data', () => {
    expect(trip1.id).to.equal(1);
    expect(trip1.userID).to.equal(7);
    expect(trip1.destinationID).to.equal(15);
    expect(trip1.travelers).to.equal(1);
    expect(trip1.date).to.equal('2019/09/16');
    expect(trip1.duration).to.equal(8);
    expect(trip1.status).to.equal('approved');
    expect(trip1.suggestedActivities).to.deep.equal([]);
  });

  it('should have an estimated cost', () => {
    trip1.calculateTripCost(destinations)
    expect(trip1.estimatedCost).to.equal(1342)
  })
});