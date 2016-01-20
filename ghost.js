var ghostTemplate = function(options) {
 this.name = options.name,
 this.scaryness = options.scaryness,
 this.translucence = options.translucence,
 this.chains = options.chains || false,
 this.sex = options.sex,
 
 this.scareFactor = function() {
  if(this.scaryness > 50) {
    console.log("This ghost means business")
  }
 }
 this.lightOn = function() {
  if (this.translucence > 0) {
    this.translucence += 5;
  }
  if(this.translucence >= 100) {
    console.log("This Ghost has become Human!")
    }
  return this.translucence 
  }
}

var obj1 = {
  name: "Drooler",
  scaryness: 60,
  translucence: 70,
  sex: "Maybe"
}

var obj2 = {
  name: "Bopeep",
  scaryness: 10,
  translucence: 20,
  sex: "Female"
}

var newGhost1 = new ghostTemplate(obj1);
var newGhost2 = new ghostTemplate(obj2);
console.log(newGhost2);
newGhost2.lightOn();
newGhost2.lightOn();
newGhost2.lightOn();
newGhost2.lightOn();
newGhost2.lightOn();
console.log(newGhost2);


