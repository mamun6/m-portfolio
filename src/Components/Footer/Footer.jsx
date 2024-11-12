import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <p>I am a frontend developer from, Dhaka Bangladesh. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                mamun@2024. All rights
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>

       </div>


    </div>
  
  )
}

export default Footer
