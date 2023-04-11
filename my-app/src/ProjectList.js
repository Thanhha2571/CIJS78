import ProjectItem from "./ProjectItem"
import "./ProjectList.css"
import projectData from "./mockData/productMock"
function ProjectList(props) {
  console.log(props);
  const {projectData} = props
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>

      <div className="projects-grid">
        {products.map(({ id, name, img }) => <ProjectItem key={id} title={name} bground={img} />)}
      </div>

      <a href="#welcome-section" className="btn btn-show-all" target="_blank"
      >Show all<i className="fas fa-chevron-right"></i
      ></a>
    </section>
  )
}
export default ProjectList