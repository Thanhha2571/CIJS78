// import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Footer from './Footer';
import ProjectList from './ProjectList';
import StartContact from './StartContact';
import { useEffect, useState } from "react";
import LearnState from './LearnState';
import {ContextDemoProvider} from "./ContextDemo";
// import projectData from './mockData/productMock';
function App() {
  // const [counter, setCounter] = useState(0)
  // const [products, setProducts] = useState([])
  // useEffect (() => {
  //   console.log("Use Effect")
  //   fetch ("https://61ebae077ec58900177cdd0b.mockapi.io/nft")
  //   .then (res => res.json())
  //   .then((data) => {
  //     setProducts(data)
  //   })
  // }, []);
  // const handleCounter = () => {
  //   setCounter(counter+1);
  // }
  return (
    <div className="App">
      {/* <h1 style = {{color:"black"}}>{currentCount}</h1>
      <button onClick = {cong} >+</button>
      <button onClick = {tru}>-</button> */}
    
      
      <section id="welcome-section" className="welcome-section">
        <h1>Hey I am mindXer</h1>
        <p>A Full Stack Web Developer</p>
      </section>
      <ContextDemoProvider>
        <Header  />
        <ProjectList />
      </ContextDemoProvider>
      <StartContact/>
      <Footer/>
      {/* <LearnState/> */}
    </div>
  );
}

export default App;
