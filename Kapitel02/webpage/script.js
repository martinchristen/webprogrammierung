
var zufallszahl = Math.floor(100*Math.random()) + 1;

function myFunction() {
    console.log("Button geklicked!!");

    var div = document.getElementById("meinDiv");

    var ratezahl = document.getElementById('zahl').value;

    var zahl = parseInt(ratezahl);

    if (zahl > zufallszahl) {
        div.innerHTML = "Die Zahl ist kleiner";
    }
    else if (zahl < zufallszahl) {
        div.innerHTML = "Die Zahl ist grösser";
    }
    else if (zahl == zufallszahl) {
        div.innerHTML = "<b>GEWONNEN!!!!</b>";
    }

    



}