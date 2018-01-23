const Park = function(){
  this.enclosure = [];
};

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeByType = function(type){
  this. enclosure = this.enclosure.filter(dinosaur => dinosaur.type !== type);
}

module.exports = Park;
