import React from 'react'
import '../Footer/Footer.scss'
import Twitter from '../../Assets/twitter.svg'
import Facebook from '../../Assets/facebook.svg'

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="itemFooter">About Us</div>
      <div className="itemFooter">Contact</div>
      <div className="itemFooter"><img src={Twitter} className="pictureIcons" alt="twitter"></img>Twitter</div>
      <div className="itemFooter"><img src={Facebook} className="pictureIcons" alt="facebook"></img>Facebook</div>
    </div>
  )
}

export default Footer