const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("T-rex", 2);
  })

  it('can get dinosaur type', function(){
    assert.strictEqual(dinosaur.type, 'T-rex');
  })

  it('can get numberOfOffspring', function(){
    assert.strictEqual(dinosaur.numberOfOffspring, 2);
  })

})
