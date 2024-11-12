import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span> I'm Md Mamun Hossen, </span>Frontend Developer.</h1>
      <p>I have an 5 year Exprience in Web Developer in MERN Stack</p>
        <div className="hero-action">
            <div className="hero-connect"> Connect With me</div>
                <div className="hero-resume"> My Resume </div>
        </div>
   
   
    </div>
  )
}

export default Hero
