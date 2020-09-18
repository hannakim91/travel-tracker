import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import destinationData from './test-data/destination-data';

describe('Traveler class and methods', function() {

  let destination;

  beforeEach(() => {
    destination = new Destination();
    // console.log(destinationData)
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destination).to.be.an.instanceof(Destination);
  });

});
