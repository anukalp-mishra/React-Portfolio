import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='author'>
        <p><i class="fa-sharp fa-solid fa-code fa-beat"></i>&nbsp; with <i className="fa-solid fa-heart fa-bounce" style={{color: "red"}}></i> by<a href="https://github.com/anukalp-mishra/MyResume/blob/main/Anukalp%20Mishra%20Resume.pdf" target="_blank" rel="noopener noreferrer"> Anukalp</a></p>
        </div>
        <div className=''>
        <p className='copyright'> <i className='far fa-copyright'></i> {new Date().getFullYear()} All rights reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer
