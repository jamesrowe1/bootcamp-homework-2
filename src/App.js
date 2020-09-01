import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Project from "./components/Project/Project"
function App() {
  return (
   <div> 
      <Header />
      <h3>My works</h3>
      <div className="row">
        <Project 
          screenshot={require("./assets/iclassroom.jpg")} 
          title="iClassroom" 
          explanation="iClassroom is an app for teacher-supervised student interactions. Students can sign-in to their account dashboard. Here, they can upload or create documents, and they can schedule learning sessions with one another. A separate teacher dashboard contains a gradebook and access/ display of all student materials." 
          github="https://github.com/jamesrowe1/project2"/>
        <Project 
          screenshot={require("./assets/zap.jpg")} 
          title="ZAP" 
          explanation="ZAP: GAME ON! A search engine specifically for video games, allowing you to find any game you can imagine, and find the best price to buy it at!" 
          github="https://github.com/jamesrowe1/ZAP"/>
      </div>
    </div>
  );
}

export default App;
