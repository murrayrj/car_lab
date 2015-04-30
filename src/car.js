function Car(make, model, year, color, state, previousOwners, currentOwner, passengers, sale){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = 'off';
  this.previousOwners = '';
  this.currentOwner = 'Manufacturer';
  this.passengers = '';
}

Car.prototype.sale = function(newOwner){
this.previousOwners = ['Manufacturer'];
this.currentOwner = 'Charlie';
};

Car.prototype.paint = function(newColor){
this.color ='Blue';
};


module.exports=Car;