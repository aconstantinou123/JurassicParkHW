const Park = function(){
  this.enclosure = [];
};

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeByType = function(type){
  this.enclosure = this.enclosure.filter(dinosaur => dinosaur.type !== type);
}

Park.prototype.moreThanXEggs = function(numberOfEggs){
  var resultArray = [];
  for (var i = 0; i < this.enclosure.length; i++) {
    if(this.enclosure[i].numberOfOffspring > numberOfEggs){
        resultArray.push(this.enclosure[i]);
    }
  }
  return resultArray;
}

Park.prototype.calculateDinosaurs = function(numberOfYears){
  var totalOffspring = 0;
  for (dinosaur of this.enclosure) {
    var numberOfOffspringPerDinosaur = Math.pow(1 + dinosaur.numberOfOffspring, numberOfYears);
    totalOffspring += numberOfOffspringPerDinosaur;
  }
  return totalOffspring;
}

module.exports = Park;
