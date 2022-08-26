import "../../components/Knowledge/Knowledge.css"
import CardComponent from "../CardComponent/CardComponent"


import htmlIcon from "../../asserts/imgs/html.png"
import css from "../../asserts/imgs/css.png"
import js from "../../asserts/imgs/js.png"
import bootstrap from "../../asserts/imgs/bootstrap.png"
import react from "../../asserts/imgs/react.png"
import jquery from "../../asserts/imgs/juery.png"
import nodeIcon from "../../asserts/imgs/nodeIcon.svg"



const Knowledge = () => {

  return (
    <div className="Knowledge p-5" id="Knowledge">
        <h1 className="text-black pb-5">Knowledge</h1>

        <div className="row g-4 p-3 shadow-sm border">

          <div className="col-md-4">
            <CardComponent 
              img={htmlIcon}
            />
            <p className="text-center">HTML</p>
          </div>

          <div className="col-md-4">
            <CardComponent 
              img={css} 
            />
            <p className="text-center">CSS</p>
          </div>

          <div className="col-md-4">
            <CardComponent 
            img={js} 
            />
            <p className="text-center">JAVASCRIPT</p>
          </div>

          <div className="col-md-4">
            <CardComponent 
            img={bootstrap} 
            />
            <p className="text-center">BOOSTRAP</p>
          </div>

          <div className="col-md-4">
            <CardComponent 
            img={jquery} 
            />
            <p className="text-center">JQUERY</p>
          </div>

          <div className="col-md-4">
            <CardComponent 
            img={react} 
            />
            <p className="text-center">REACT</p>
          </div>

          <div className="col-md-4">
            <CardComponent 
            img={nodeIcon} 
            />
            <p className="text-center">NODEJS</p>
          </div>

        </div>
    </div>
  )
}

export default Knowledge