import React from 'react'
import './About.css'
import profile_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        
        </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Motivated, proactive, and hands-on developer with 5+ years experience developing and managing information systems for software development and cloud-based companies. Energetic team leader with strong organizational skills and history of driving user-based database design initiatives.</p>
                        <p>Profile summary for software developers should concisely present their skills, experience, and expertise that highlight their qualifications for the job. This summary must include the developer's technical skills and the programming languages they are proficient</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p> HTML & CSS</p> <hr style={{width:"50%"}} /> </div>
                        <div className="about-skill"> <p> React Js</p> <hr style={{width:"70%"}} /> </div>
                        <div className="about-skill"> <p> JavaScript</p> <hr style={{width:"60%"}} /> </div>
                        <div className="about-skill"> <p> Next Js</p> <hr style={{width:"50%"}} /> </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Years of Exprience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>Projects Completed </p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
    </div>
  )
}

export default About
