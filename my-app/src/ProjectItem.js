import "./ProjectItem.css"

function ProjectItem(props) {

  const handleBuyCourse = () => {
    console.log("Buy Course")
  }
  return (
    // href="#welcome-section" target="_blank"
    <a className="project project-tile"> 
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
      <button className="buy-course" onClick={handleBuyCourse}>Buy Course</button>
    </a>
  )
}

export default ProjectItem