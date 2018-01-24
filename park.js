const Park = function(){
  this.enclosure = [];
};

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeByType = function(type){
  this. enclosure = this.enclosure.filter(dinosaur => dinosaur.type !== type);
}

Park.prototype.moreThanTwoEggs = function(){
  var resultArray = [];
  for (var i = 0; i < this.enclosure.length; i++) {
    if(this.enclosure[i].numberOfOffspring > 2){
        resultArray.push(this.enclosure[i]);
    }
  }
  return resultArray;
}

Park.prototype.calculateDinosaurs = function(numberOfYears){
  var totalOffspring = 0;
  for (var i = 0; i < this.enclosure.length; i++) {
    var offspringPerDinosaur = Math.pow(this.enclosure[i].numberOfOffspring, (numberOfYears));
    console.log(offspringPerDinosaur);
    totalOffspring += offspringPerDinosaur;
  }
  return totalOffspring;
}

module.exports = Park;
