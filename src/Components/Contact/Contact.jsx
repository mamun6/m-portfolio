import React from 'react'
import './Contact.css'
import { MdEmail} from 'react-icons/md';
import { IoCallOutline } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so any problem you can discussion with me and i Will solve your problem</p>
            <div className="contact-details">
              <div className="contact-detail">
              <p> <MdEmail/> Hossenmamun567@gmail.com</p>
              </div>
              <div className="contact-detail">
                <p> <IoCallOutline/> +8801862363609</p>
              </div>
              <div className="contact-detail">
                 <p> <FaAddressCard/> Dhaka,Bangladesh.</p>
              </div>
            </div>
        </div>
      <form className='contact-right'>
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit' >Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
