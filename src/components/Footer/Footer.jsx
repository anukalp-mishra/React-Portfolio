import React, { useEffect } from 'react';
import "./Footer.css";

function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://counter6.optistats.ovh/private/counter.js?c=l3tpwwhrdhbw31xfxa7rnhnhhbhdze62&down=async";
    script.async = true;
    script.onload = () => console.log("Visitor counter script loaded successfully.");
    script.onerror = () => console.error("Error loading visitor counter script.");
    document.getElementById('sfcl3tpwwhrdhbw31xfxa7rnhnhhbhdze62').appendChild(script);
  }, []);

  return (
    <>
      <div className='footer'>
        <div className='author'>
          <p>
            <i className="fa-sharp fa-solid fa-code fa-beat"></i>&nbsp; with <i className="fa-solid fa-heart fa-bounce" style={{color: "red"}}></i> by
            <a href="https://github.com/anukalp-mishra/MyResume/blob/main/Anukalp%20Mishra%20Resume.pdf" target="_blank" rel="noopener noreferrer"> Anukalp</a>
          </p>
        </div>
        <div className=''>
          <p className='copyright'>
            <i className='far fa-copyright'></i> {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        {/* Visitor Counter */}
        <div id="sfcl3tpwwhrdhbw31xfxa7rnhnhhbhdze62"></div>
        <noscript>
          <a href="https://www.freecounterstat.com" title="free counter">
            <img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=l3tpwwhrdhbw31xfxa7rnhnhhbhdze62" border="0" title="free counter" alt="free counter" />
          </a>
        </noscript>
      </div>
    </>
  );
}

export default Footer;