import React, {useState} from "react";
import styles from './App.module.css';
import Nav from "./Components/Nav/Nav"
import Om from './Components/Om/Om';
import Utbildning from './Components/MenuContent/Utbildning/Utbildning';
import Kontakt from './Components/Kontakt/Kontakt';
import Home from './Components/Home/Home';
import Applåder from "./Components/MenuContent/Applåder/Applåder";
import Kundservice from "./Components/MenuContent/Kundservice/Kundservice";
import Betalt from "./Components/MenuContent/Betalt/Betalt";
import Hälsa from "./Components/MenuContent/Hälsa/Hälsa";
import Marknadsföring from "./Components/MenuContent/Marknadsföring/Marknadsföring";
import Enkät from "./Components/MenuContent/Enkät/Enkät";
import Starta from "./Components/MenuContent/Starta/Starta";
import Hamburger from "./Components/Nav/Hamburger";


import {
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [ defaultHeading, SetDefaultHeading ] = useState("Mest Kunskap");

  const changeHeading = (heading) => {
    SetDefaultHeading(heading);
  };

  return (
    
    <div className={styles.App}>
      <Hamburger />
      <Nav defaultHeading={defaultHeading} />
      <Switch>
          <Route path="/om">
            <Om changeHeading={changeHeading} />
          </Route>
          <Route path="/utbildning">
            <Utbildning changeHeading={changeHeading} />
          </Route>
          <Route path="/kontakt">
            <Kontakt changeHeading={changeHeading}/>
          </Route>
          <Route path="/applåder">
            <Applåder changeHeading={changeHeading} />
          </Route>
          <Route path="/kundservice">
            <Kundservice changeHeading={changeHeading} />
          </Route>
          <Route path="/hälsa">
            <Hälsa changeHeading={changeHeading} />
          </Route>
          <Route path="/marknadsföring">
            <Marknadsföring changeHeading={changeHeading} />
          </Route>
          <Route path="/enkät">
            <Enkät changeHeading={changeHeading} />
          </Route>
          <Route path="/starta">
            <Starta changeHeading={changeHeading} />
          </Route>
          <Route path="/betalt">
            <Betalt changeHeading={changeHeading} />
          </Route>
          <Route path="/">
            <Home changeHeading={changeHeading} />
          </Route>
      </Switch>
      </div>
  
  );
}

export default App;
