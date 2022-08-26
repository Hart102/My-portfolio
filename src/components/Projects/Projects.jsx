import { useState } from "react"
import "../../components/Projects/Projects.css"
import CardComponent from "../CardComponent/CardComponent"

import img1 from "../../asserts/imgs/Capture1.PNG"
import img2 from "../../asserts/imgs/Capture3.PNG"
import dashboard from "../../asserts/imgs/dashboard.png"
import portfolio from "../../asserts/imgs/portfolio.PNG"
import blog from "../../asserts/imgs/blog.PNG"
import wow from "../../asserts/imgs/wow.PNG"



const Projects = () => {

  // FUNCTION TO OPEN FULL IMAGE 
  const [viewProject, setViewProject] = useState(false)

  // FULL VIEW FUNCTIONALITY 
  const FullImgAction = (e) => {

    setViewProject(!viewProject)
    document.querySelector('#fullImg').src = e.target.src
    
  }
  
 


  return (
    <>
    <div className="Projects" id="Projects">
        <div className="py-5">

          <div className="px-5 mb-4">
            <h1 className="text-black">My Projects</h1>
            <p>Click on any project to view.</p>
          </div>          

          <div className="row g-2 px-5 py-4">

            {/* FULL IMG VIEW CONTAINER  */}
            <div className={!viewProject ? "d-none" : "fullImg d-flex align-items-center justify-content-center d-flex"}>

              <div className="closingTab bg-white p-2" onClick={FullImgAction}>
                <i className="fa fa-times text-dark"></i>
              </div>

              <img id="fullImg" className='img-fluid' alt="img" />

            </div>

            <div className="col-md-4">
              <CardComponent
                img={img2}
                action={FullImgAction}
              />
            </div>

            <div className="col-md-4">
              <CardComponent
              img={blog} 
              action={FullImgAction}
              />
            </div>
            
            <div className="col-md-4">
              <CardComponent
              img={wow} 
              action={FullImgAction}
              />
            </div>

            <div className="col-md-4">
              <CardComponent
              img={dashboard} 
              action={FullImgAction}
              />
            </div>

            <div className="col-md-4">
              <CardComponent
                img={img1} 
                action={FullImgAction}
              />
            </div>
            
            <div className="col-md-4">
              <CardComponent
                img={portfolio} 
                action={FullImgAction}
              />
            </div>

          </div>
        </div>
    </div>
    </>
  )
}

export default Projects