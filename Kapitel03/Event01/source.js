function keydown(event) {
    console.log("Taste wurde gedrückt");
    var d = document.getElementById("output");
    d.innerHTML = "Taste gedrückt:"+ event.key + " " + event.code;
}

function keyup(event) {
    console.log("Taste wurde losgelassen");

    var u = document.querySelector("#output");
    u.innerHTML = "Taste losgelassen: " + event.key + " " + event.code;

    if (event.key == "b") {
        u.innerHTML += " SIE HABEN GEWONNEN";
    }

}

