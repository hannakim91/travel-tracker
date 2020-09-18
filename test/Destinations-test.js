import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import destinationsData from './test-data/destinations-data';

describe('Traveler class and methods', function() {

  let destinations;

  beforeEach(() => {
    destinations = new Destination();
    // console.log(destinationsData)
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destinations).to.be.an.instanceof(Destination);
  });

});
