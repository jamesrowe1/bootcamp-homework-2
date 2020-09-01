import React from "react";
import "./Header.css";
import homelink from "../../assets/home.png"
const Header = () => {
  
  return (
        <div className="jumbotron">
          <div className="card">
            <h2>Hello, I'm James Rowe</h2>
            <h2>Full Stack Web Developer</h2>
            </div>
          <a
            className="home"
            href="#top"
            rel="noopener noreferrer"
          >
            <img src={homelink} alt="home button" class="nav"></img>
          </a>
          
        </div>
      )
}

export default Header