import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Hy! There, 👋</h2>
        <p>My name is Anukalp Mishra and I am a passionate DevOps Engineer with 2+ years of experience with DevOps technologies like Jenkins, Ansible, Chef, Docker, Kubernetes, Terraform etc.. </p>
        <a href="https://www.linkedin.com/in/anukalpmishra/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
