import React from "react";
import Weisheit from "./Weisheit";
import Test from "./Test";
import Count from "./Count";
import Uhr from "./Uhr";
import Umrechner from "./Umrechner";

function App() {

    var s = "Dies ist eine Variable";

    return (<> 
               <Umrechner/>
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