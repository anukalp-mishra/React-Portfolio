import './App.css';
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

import Navbar from './components/Navbar/Navbar'
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Service from "./views/Service/Service"
import Project from './views/Project/Project';
import Contact from "./views/Contact/Contact"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>     
      <div className='body'>      
        <div id="loading_start" className='loading_start_none'>
          <p>Loading</p>
          <PulseLoader color={"#05e6ee"} size={12} />
        </div>
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <Project/>
        <Contact/>
        <Footer/>
        {/* Visitor Counter */}
        <div id="sfcl3tpwwhrdhbw31xfxa7rnhnhhbhdze62"></div>
        <script type="text/javascript" src="https://counter6.optistats.ovh/private/counter.js?c=l3tpwwhrdhbw31xfxa7rnhnhhbhdze62&down=async" async></script>
        <noscript>
          <a href="https://www.freecounterstat.com" title="free counter">
            <img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=l3tpwwhrdhbw31xfxa7rnhnhhbhdze62" border="0" title="free counter" alt="free counter" />
          </a>
        </noscript>
      </div> 
    </>
  );
}

export default App;