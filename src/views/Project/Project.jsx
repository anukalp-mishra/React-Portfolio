import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/timetablems.png'
import img5 from  '../../images/Portfolio.png'
import img3 from  '../../images/expensetracker.png'
import img4 from  '../../images/resumeScreening.png'
import img1 from  '../../images/bookmart.png'
import img2 from  '../../images/onlineexams.png'
import img6 from  '../../images/parallexwebp.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Expense Tracker" img= {img3} link = "https://github.com/anukalp-mishra/Expense_Tracker"  />
            <ProjectBox title = "Portfolio Website" img= {img5} link = ""  />
            <ProjectBox title = "Time table management system" img= {img7} link = "https://github.com/anukalp-mishra/Timetable-management-system"  />
            <ProjectBox title = "Resume Screening" img= {img4} link = "https://github.com/anukalp-mishra/Resume-Screening"  />
            <ProjectBox title = "Book Library" img= {img1} link = "https://github.com/anukalp-mishra/BookMart"  />
            <ProjectBox title = "Online Exam System" img= {img2} link = "https://github.com/OnlineExamSystem7/Online-Exam-System"  />
            <ProjectBox title = "Parallax Web Page" img= {img6} link = "https://github.com/anukalp-mishra/Parallax-Web-Page"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
