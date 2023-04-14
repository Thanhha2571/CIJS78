import "./ProjectItem.css"
import { useContext } from "react";
import { ContextDemo } from "./ContextDemo";
import {Link} from "react-router-dom"
function ProjectItem(props) {
  // const { handleCounter } = props
  const {handleCounter} = useContext(ContextDemo);
 
  return (
    // href="#welcome-section" target="_blank"
    <div className="project project-tile"> 
      <img
        className="project-image"
        src={props.bground}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        {props.title}
        <span className="code">&#47;&gt;</span>
      </p>
      <button className="buy-course" onClick={handleCounter}>Buy NFT</button>
      <Link className="buy-course" to = {`/projects/${props.id}`} >View NFT</Link>
    </div>
  )
}

export default ProjectItem