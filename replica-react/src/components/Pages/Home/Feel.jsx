import React from 'react'
import '../Home/Feel.scss'
import Girl from '../../../Assets/landing-page-girl.png'


const Feel = () => {
  return (
    <div className="text">
        <img src={Girl} class="pictureGirl" alt="Girl"></img>
        <div className="containerR">
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand songs with one click</p>
          <button className="joinBtn">Join Now</button>
        </div>
    </div>
  )
}

export default Feel


