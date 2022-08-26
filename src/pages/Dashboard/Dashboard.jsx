import Navbar from "../../components/Navbar/Navbar"
import img from "../../asserts/imgs/bg2.jpg"

import Admin from "../../pages/Dashboard/Dashboard.css"

const Dashboard = () => {
  return (
    <>
        <Navbar />
        {/* <div className="Header p-5" style={jumbotrom}>
            <h3 className="text-center text-black">Admin dashboard</h3>
        </div> */}

        <div className="dashboard HomeContainer1 container p-5">
            <div className="visitors text-end py-5">
                <h3 className="text-center text-black">Admin dashboard</h3>
                <p>Visitors: (<b>0</b>)</p>
            </div>

            <div className="post d-flex flex-column">
                
                <div className="action d-flex justify-content-between">
                    <h1 className="text-black">Make Post</h1>
                    <b className="text-black">...</b>
                </div>

                <input type="text" placeholder="Write" className="border-bottom my-4 p-2" />

                <input type="file"/>

                <div className="btn border mt-5">Uplaod</div>
            </div>
        </div>


    </>
  )
}

const jumbotrom = {
    height: "20vh",
    backgroundSize: "cover",
    width: "500% !important",
    // background: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

export default Dashboard