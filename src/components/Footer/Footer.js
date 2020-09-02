import React from "react";
import "./Footer.css"
const Footer = () => {
  
    return (
        <div className="contact">
        <div className="row">
            <div className="col-sm-3">
                <h4><a href="https://www.linkedin.com/in/james-rowe-87b19210">LinkedIn</a></h4>
            </div>
            <div className="col-sm-3">
                <h4><a href="https://github.com/jamesrowe1">GitHub</a></h4>
            </div>
            <div className="col-sm-3">
                <h4><a href = "mailto: rowejamesa@gmail.com">Send Email</a></h4>
            </div>
            <div className="col-sm-3">
                <h4><a href="tel:7174337699">Call James at 717-433-7699</a></h4>
            </div>
            </div>
        </div>
    )
}

export default Footer