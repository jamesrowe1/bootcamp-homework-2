import React from "react";
import "./Project.css";

const Project = ({screenshot, title, explanation, github}) => {
   return (
    <div class="col-md-4">
        <div class="card">
        <img src={screenshot} class="card-img-top" alt={title}/>
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{explanation}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Github Repo</a>
        </div>
    </div>
  </div>
   ) 
}

export default Project