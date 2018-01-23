const assert = require('assert');
const Dinosaur = require('../dinosaur');
const Park = require('../park');

describe('Park', function(){

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("T-Rex", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
    dinosaur3 = new Dinosaur("Triceratops", 1);
    dinosaur4 = new Dinosaur("Triceratops", 1);
  })

  it('park is empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('can add dinosaur to park', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.enclosure.length, 3);
  })

  it('can remove dinosaurs by type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeByType("Triceratops");
    assert.strictEqual(park.enclosure.length, 2);
  })

})
