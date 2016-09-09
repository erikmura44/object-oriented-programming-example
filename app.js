// var Dog = function(name){  //constructor functions are capitalized. makes a new type.
//   this.name = name;
//   this.legs = 4; //property, descriptor of the object being created
//   this.bark =  function() { //method is a fucntion inside constructor
//     return "Woof";
//   }
// }
//
// var ferdi = new Dog('Ferdinand'); //variable is an instance of Dog.
//
// console.log(ferdi.legs);
//
// ferdi.legs = 3;  //polymorphism
//
// console.log("Ferdi post-accident", ferdi.legs);
// console.log('Ferdi says', ferdi.bark());


// var Mug = function(color){
//   this.color = color;
//   this.fullness = 50;
//   this.contents = "tea";
// }
// Mug.prototype.drink = function(){
//   if (this.fullness === 0) {
//     this.refill();
//     console.log('refilling my drink');
//     this.drink();
//   } else {
//     this.fullness -=10;
//   }
// };
// Mug.prototype.refill = function(){ //add on extra functionality that doesnt have to be added to constructor
//   this.fullness = 100;
// };
// Mug.prototype.break = function(){
//   return ("mug is broken, dispair");
// };
//
//
//
// var erikMug = new Mug('white');
// console.log("in the beginning eriks mug was", erikMug.fullness + "% full");
// erikMug.drink();
// erikMug.drink();
// erikMug.drink();
// erikMug.drink();
// erikMug.drink();
// erikMug.drink();
// erikMug.drink();
// console.log("after a drink eriks mug was", erikMug.fullness + "% full");
// erikMug.drink();
// erikMug.drink();




var Car = function(color){
  this.color = color;
  this.wheels = 4;
  this.windshield = true;
}
Car.prototype.crash = function(){
  this.wheels -= 2;
  this.windshield = false;
}
Car.prototype.repair = function(){
  this.wheels +=4;
  this.windshield = true;
}

var truck = new Car('white');
console.log('Before the crash, the car had', truck.wheels, "wheels and was there a windshield?", truck.windshield);
truck.crash();
console.log('After the crash, the car had', truck.wheels, "wheels and was there a windshield now?", truck.windshield);
truck.repair();
console.log('After the repair, the car now has', truck.wheels, "wheels and is the windshield repaired?", truck.windshield);
