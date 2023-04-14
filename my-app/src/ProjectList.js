import ProjectItem from "./ProjectItem"
import "./ProjectList.css"
import { useContext } from "react";
import { ContextDemo } from "./ContextDemo";
// import projectData from "./mockData/productMock"
function ProjectList(props) {
  // console.log(props);
  // const {products, handleCounter} = props
  const { products } = useContext(ContextDemo)
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my NFTS</h2>

      <div className="projects-grid">
        {products.map(({ id, name, url }) => <ProjectItem key ={id} id={id} title={name} bground={url} />)}
      </div>

      <a href="#welcome-section" className="btn btn-show-all" target="_blank"
      >Show all<i className="fas fa-chevron-right"></i
      ></a>
    </section>
  )
}
export default ProjectList