import React from "react";
import "./Header.css";
import homelink from "../../assets/home.png"
import portfolio from "../../assets/portfolio.png"
const Header = () => {
  
  return (
        <div className="jumbotron">
          <div className="card card-header">
            <h2>Hello, I'm James Rowe</h2>
            <h2>Full Stack Web Developer</h2>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#/"
                rel="noopener noreferrer"
              >
                <img src={homelink} alt="home button"></img>
                <p>Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#/portfolio"
                rel="noopener noreferrer"
              >
                <img src={portfolio} alt="portfolio"></img>
                <p>Portfolio</p>
              </a>
              </li>
          </ul>
          
        </div>
      )
}

export default Header