function Car(make, model, year, color, state, previousOwners, currentOwner){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = 'off';
  this.previousOwners = '';
  this.currentOwner = 'Manufacturer';
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;