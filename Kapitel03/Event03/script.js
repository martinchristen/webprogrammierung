var t = 0;

function zeit() {
    t += 500;
    console.log("TIMER ausgelöst" + t);
    var o = document.querySelector("#output");
    o.innerHTML = "Timer: " + t;
}


function start() {
    console.log("START!!!!");

    if (t==0) {
        setInterval(zeit, 500);
    }
}