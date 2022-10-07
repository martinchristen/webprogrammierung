function changestyle() {
    var button = document.querySelector("#mybutton");

    var random = Math.floor(Math.random()*16777215).toString(16);

    var farbe = "#" + random;

    button.style["background-color"] = farbe;
    button.style["font-size"] = "30px";
    button.style["padding"] = "32px 32px";
    button.style["text-align"] = "center";

}