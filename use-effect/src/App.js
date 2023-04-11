// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import Scroll from "./Scroll";
function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    console.log("Effect update title");
    document.title = `Learn useEffect ${count}`;
  },[count]);

  const onIncreaseCount = () => {
    setCount(count + 1)
    console.log("Count Render")
  };
  const onToggleScroll = () => {
    setVisible(prev => !prev)
    console.log("Toogle Render")
  };
  return (
    <div style={{
      height: "200vh ",
    }}>
      <p>Learn useEffect</p>
      <p>{count}</p>
      <button onClick={onIncreaseCount}>+</button>
      {visible && <Scroll/>}
      <button onClick={onToggleScroll}>Toggle Scroll</button>
    </div>
  );
}

export default App;
