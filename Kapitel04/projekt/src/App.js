import React from "react";
import Weisheit from "./Weisheit";
import Test from "./Test";
import Count from "./Count";

function App() {

    var s = "Dies ist eine Variable";

    return (<>
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