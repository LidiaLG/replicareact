import React from "react"
import Logo from "../../Assets/logo.png"
import "../Navbar/Navbar.scss"
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className="container-nav">
            <div className="marca">
                <Link to="/"><img src={Logo} className="pictureLogo" alt="logo"></img></Link>
                <div className= "title">
                    <h1>Soundwave</h1>
                </div>
            </div>
            <div className="btnNav">
                <Link to="/discover" className="navElement"> Discover </Link>
                <Link to="/join" className="navElement"> Join </Link>
            </div>
        </div>
    )
}

export default Navbar;