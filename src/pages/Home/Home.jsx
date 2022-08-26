import "../Home/Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Jumbotrom from "../../components/Jumbotrom/Jumbotrom"
import AboutMe from "../../components/AboutMe/AboutMe"
import Projects from "../../components/Projects/Projects"
import Knowledge from "../../components/Knowledge/Knowledge"
import Line from "../../components/Line/Line"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"



// hartportfolio.epizy.com
// http://www.hartportfolio.epizy.com/

const Home = () => {


  return (
    <>
      <Navbar />

      <Jumbotrom />

      <div className="HomeContainer shadow bg-white">

        {/* HIRE ME DISPLAY BTN  */}
        <a href="https://wa.me/09011990031?text=Hi Dear. How may I help you ?">

          <div className="hireMeBtn p-3 d-flex align-items-center justify-content-center text-center shadow bg-dark border">
            <i className="fa fa-whatsapp text-white fa-1x"></i>
          </div>
        </a>


        <AboutMe />

        <Line />

        <Projects />

        <Line />

        <Knowledge />

        <Line />

        <Contact />

        <Footer />

      </div>
        
    </>
  )
}


export default Home