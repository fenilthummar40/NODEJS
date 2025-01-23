import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nobis obcaecati incidunt veniam ipsam animi harum quibusdam blanditiis vel ex neque, ipsum deleniti. Consequatur necessitatibus culpa placeat suscipit maiores voluptatum!</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className='footer-bottom-left'>2024 fenil thummar. All rights resverved</p>
          <div className="fotter-bootom-right">
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer