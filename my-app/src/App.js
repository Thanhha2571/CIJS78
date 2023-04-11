// import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Footer from './Footer';
import ProjectList from './ProjectList';
import StartContact from './StartContact';
import { useState } from "react";
import LearnState from './LearnState';
import projectData from './mockData/productMock';
function App() {
  return (
    <div className="App">
      {/* <h1 style = {{color:"black"}}>{currentCount}</h1>
      <button onClick = {cong} >+</button>
      <button onClick = {tru}>-</button> */}
      <Header />
      <section id="welcome-section" className="welcome-section">
        <h1>Hey I am mindXer</h1>
        <p>A Full Stack Web Developer</p>
      </section>
      <ProjectList products = {projectData} />

      <StartContact/>
      <Footer/>
      {/* <LearnState/> */}
    </div>
  );
}

export default App;
