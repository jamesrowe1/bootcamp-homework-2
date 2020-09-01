import React from "react";
import "./Project.css";

const Project = ({screenshot, title, explanation, github}) => {
   return (
    <div className="col-md-4">
        <div className="card">
        <img src={screenshot} className="card-img-top" alt={title}/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{explanation}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github Repo</a>
        </div>
    </div>
  </div>
   ) 
}

export default Project