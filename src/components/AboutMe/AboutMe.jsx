import { useState } from "react"
import "../../components/AboutMe/AboutMe.css"


const AboutMe = () => {

    const [view, setView] = useState(false)

  return (
    <>
        <div className="About" id="About">
            <div className="py-5">
                <div className="text px-5">

                    <h1 className="mb-4 text-black">About me</h1>
                    <div className={!view ? "show" : "hide"}>
                        <p className="">Exceptionality is my prime priority in any Organization I work with, where I can deploy my potentials to further achieve the Organization/Company’s ultimate and desired goal(s) with the aid of a team work in a particular section been given. </p>

                    </div>
                    
                    

                    <div className="read-more mt-4">
                        <p onClick={() => setView(!view)}>{!view ? "Read More" : "Read Less"}</p>
                    </div>  

                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe