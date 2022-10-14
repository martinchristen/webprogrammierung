import React from "react";

function Weisheit() {

    var w = ["Ein Weg entsteht, wenn man ihn geht",
    "Wer nicht an die Zukunft denkt, wird bald Sorgen haben.",
    "Über das Ziel hinausschießen ist eben so schlimm, wie nicht ans Ziel kommen.",
    "Der Edle schämt sich, wenn seine Worte seine Taten übertreffen.",
    "Damit nicht Sonn und Mond umsonst die Bahn beschlossen,/ Freut euch der Ruh, ihr Weggenossen."];


    var index = Math.floor(Math.random()*w.length);
    var text = w[index];

    return (<><hr/>
    <div>{text}</div>
    <hr/>
    </>)
}

export default Weisheit;