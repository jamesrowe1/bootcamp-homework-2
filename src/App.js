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
        <Project 
          screenshot={require("./assets/offline-budget-tracker-screenshot.jpg")} 
          title="Offline Budget Tracker" 
          explanation="Nothing is worse than trying to be responsible and track your expenses, but then seeing you don't have service when you buy something. The Offline Budget Tracker fixes that issue, by allowing you to keep track of your budget even when you are undergroun or on a plane!" 
          github="https://github.com/jamesrowe1/offline-budget-tracker"/>
        <Project 
          screenshot={require("./assets/workouttracker.jpg")} 
          title="Workout Tracker" 
          explanation="Trying to become buff? Gotta get in shape for swimsuit season? This is the app for you! Track your workouts and make sure you stay on track!" 
          github="https://github.com/jamesrowe1/workouttracker"/>
        <Project 
          screenshot={require("./assets/notetakerscreenshot.jpg")} 
          title="Note Taker" 
          explanation="Want to jot down a quick thought, or a note for later? Try out the Note Taker!" 
          github="https://github.com/jamesrowe1/notetakerscreenshot.jpg"/>
        <Project 
          screenshot={require("./assets/giacpscreenshot.jpg")} 
          title="GIACP" 
          explanation="The brand new website for Gastroentorolgy Associates of Central Pennsylvania." 
          github="https://github.com/jamesrowe1/giacp"/>
      </div>
    </div>
  );
}

export default App;
