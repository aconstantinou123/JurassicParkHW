const assert = require('assert');
const Dinosaur = require('../dinosaur');
const Park = require('../park');

describe('Park', function(){

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let tyrannosaurus;
  let dilophosaurus;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("T-Rex", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
    dinosaur3 = new Dinosaur("Triceratops", 1);
    dinosaur4 = new Dinosaur("Triceratops", 1);
    tyrannosaurus = new Dinosaur("tyrannosaurus", 4);
    dilophosaurus = new Dinosaur("dilophosaurus", 3);

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

  it('can add get all dinosaurs with more than two offspring', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    var resultArray = [];
    resultArray.push(dinosaur2);
    var testResult = park.moreThanTwoEggs();
    assert.deepEqual(resultArray, testResult);
  })

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 16);
  });

  it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 25);
  });

})
