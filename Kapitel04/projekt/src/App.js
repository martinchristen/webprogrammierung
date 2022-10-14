import React from "react";
import Weisheit from "./Weisheit";
import Test from "./Test";
import Count from "./Count";
import Uhr from "./Uhr";
import Umrechner from "./Umrechner";

function App() {

    var s = "Dies ist eine Variable";

    return (<> 
               <Umrechner title="Umrechner CHF-EUR" rate="1.03" src="CHF" dst="EUR" />
               <hr/>
               <Umrechner title="Umrechner Kilometer zu Meilen" rate="0.621371" src="KM" dst="MI" />
               <hr/>
               <Umrechner title="Gon in Grad" rate="0.9" src="Gon" dst="Grad" />
               <hr/>
               <Uhr />
               <hr/>
               <Count/>
               <hr/>
               {s}<br/>
               <button>Hello</button>
               <br/><br/>Zitat:
               <p><Weisheit /></p>
               <p><Test text="Hello World sdfhs"/></p>
              
            </>);
}

export default App;