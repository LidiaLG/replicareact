import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import '../Join/Join.scss'

const Join = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="joinContainer">
      <h1>Join the <font color="#AE457E">fun.</font></h1>
      <div className="formContainer">
          <form>
              <label className="formLabel">Name:</label><br/>
              <input type="text"/><br/>
              <label className="formLabel">Email:</label><br/>
              <input type="email"/><br/>
              <label className="formLabel">Password:</label><br/>
              <input type="password"/><br/>
              <button type="submit">Join Now</button>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Join