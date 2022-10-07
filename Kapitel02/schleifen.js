/*

for i in range(0,10):
    print(i)

*/


for (var i=0; i<10; i++) {
    console.log(i);
}

console.log("------");

for (var i=9;i>=0; i--) {
    console.log(i)
}

console.log("------");

// DON'T DO THIS:
var k = 0;
for(;k<10;) {
    console.log(k);
    k++;
}

console.log("--------------");

var Einkaufsliste = ["Apfel", "Melone", "Birne"];

for (var i in Einkaufsliste) {
    console.log(Einkaufsliste[i]);
}

console.log("--------------");

for (var i of Einkaufsliste) {
    console.log(i);
}

console.log("--------------");



for (var i=0; i<Einkaufsliste.length;i++) {
    console.log(Einkaufsliste[i]);
}