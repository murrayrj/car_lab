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

Car.prototype.start = function(state){
this.state ='on';
};

Car.prototype.off = function(state){
this.state ='off';
};

Car.prototype.pickUp = function(passengers){
if (this.state === 'on'){
this.passengers =['john']
};
Car.prototype.dropOff = function(state){
this.state ='on';
this.pickUp = 'john';
this.state = 'off';
this.passengers = '';
};
}
module.exports=Car;