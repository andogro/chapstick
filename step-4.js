// Objects have another special
// ability which is that they
// know their own context. They
// can access properties and
// functions on themselves.

var Human = function (options) {
  this.firstName = options.firstName;
  this.preferredName = options.preferredName || options.firstName;
  this.lastName = options.lastName;
  this.height = options.heightInInches;
  this.energy = 50;
  this.happiness = 50;

  this.say = function (phrase) {
    return phrase;
  };

  this.sayHeight = function () {
    var feet = Math.floor(this.height/12);
    var inches = (this.height - (feet*12));
    return  this.firstName + ' is ' + feet +  ' feet, ' + inches +' inches tall.';
  };
};

var attrs = {
  firstName: 'Bryan',
  preferredName: 'Wes',
  lastName: 'Reid',
  heightInInches: 66
};
var Wes = new Human(attrs);

console.log(Wes.sayHeight());

var attrs = {
  firstName: 'Robert',
  preferredName: 'Robby',
  lastName: 'Hajek',
  heightInInches: 71
};
var Robby = new Human(attrs);

console.log(Robby.sayHeight());

// Our Wes and Robby instances each say
// their respective heights! Nice! We
// don't need to pass them any new
// parameters to get it right, they just
// know what it is.

// TODO:
// 1. Write / re-write the sayHeight function
//    so that it returns the height in feet
//    and inches.
//    e.g. Wes.sayHeight() >> 'I am 5 foot, 
//                             6 inches tall'