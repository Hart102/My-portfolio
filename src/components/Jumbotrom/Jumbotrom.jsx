import img from "../../asserts/imgs/bg2.jpg"
import "../../components/Jumbotrom/Jumbotrom.css"

const Jumbotrom = () => {

  


  return (
    <div className="jumbotrom" style={jumbotrom} id='jumbotrom'>
      
        <div className="overlay py-5">
            <div className="py-5 text-center px-4">
              <h3 className="">Hart C Justman</h3>
              <p className="text-white mb-3">Am Hart C Justman a web developer from somewhere.</p>

            </div>
        </div>
    </div>
  )
}

const jumbotrom = {
    background: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw !important",
}

export default Jumbotrom