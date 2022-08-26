import { useEffect, useState } from "react"
import "../../components/Navbar/Navbar.css"


const Navbar = () => {
  // FUNCTION TO ADD BACKGROUND TO THE NAVBAR ON SCROLL 
  const [move, setMove] = useState(false)

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setMove(!move)
        
      }else{
        setMove(move)
      }
     
    })

  }, [])

  // DISPLAYING AND HIDING NAV LINKS 
  const [menu, setMenu] = useState()

  return (

    <div className={move ? "Navbar bg-white py-3 shadow px-lg-5" : "Navbar py-3 px-lg-5"}>
        <div className="container d-flex align-items-center justify-content-between px-5">

            <h3 className={move ? "text-black" : "text-white"}>Welcome to my portfolio</h3>

            {/* NAVBAR LINKS   */}
            <div className={!menu ? "d-none" : "links d-flex flex-column bg-white shadow"} onClick={() => setMenu(!menu)}>
              <a href="#jumbotrom" className="p-3">Home</a>
              <a href="#About" className="p-3">About</a>
              <a href="#Projects" className="p-3">Project</a>
              <a href="#Knowledge" className="p-3">Knowledge</a>
              <a href="#contact" className="p-3">Contact</a>
            </div>


            {/* HARMBURGER INCON  */}
            <div className="harmburger border" onClick={() => setMenu(!menu)}>
              {menu ? <i className={move ? "fa fa-times text-black" : "fa fa-times text-white"}></i>
                : <div className={move ? "text-black" : "text-white"}>&#9776;</div>
              }
            </div>
            
        </div>
    </div>
  )
}


export default Navbar