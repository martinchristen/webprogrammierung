"use strict";

console.log(Math.PI);
console.log(Math.E);

var a = -5;

console.log(Math.abs(a));

var s = Math.sin(0);
s = Math.cos(Math.PI);

var r = Math.random();  // [0,1)



function randomSelect(myArray) {
  var choice = myArray.length*Math.random();
  var index = Math.floor(choice);
  return f[index];  
}

var f = ["Apfel", "Birne", "Melone", "Anananas", "Banane"];

for (var i=0;i<20;i++) {
    console.log(randomSelect(f));
}