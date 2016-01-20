var human= function(name,color,temp) {
this.name = name;
this.color = color;
this.temp = 100;


}

var newHuman = new human('Andy','purple',100);

console.log(newHuman);



var chapstick = function() {
  this.color = 'Yellow';
  this.volume = 100;
  this.capped = true;
  this.cap = function() {
    this.capped = true;
  };
  this.uncap = function() {
    this.capped = false;
  };
  this.melt = function() {
    this.volume = (this.volume - 20);
  }
}

var Mychapstick = new chapstick();

Mychapstick.melt();

console.log(Mychapstick);


