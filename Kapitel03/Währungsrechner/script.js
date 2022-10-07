var kurs = 1.03;

function umrechnen() {

    var chf = document.querySelector("#src");
    var eur = document.querySelector("#dst");

    var wert_chf = chf.value;

    eur.setAttribute("value", Math.round(wert_chf*kurs*100)/100);

}