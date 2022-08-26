import "../../components/HireMe/HireMe.css"
import ClosingTab from "../../components/ClosingTab/ClosingTab"


const HireMe = ({ closingTabAction }) => {
  return (
    <div className="HireMe py-5" id="hire">
        <div className="HomeContainer shadow p-5">

            {/* CLOSING TAB  */}
            <div onClick={closingTabAction} >
                <ClosingTab />
            </div>


            <form className="form px-5">

                <div className="px-3">
                    <h3 className="text-black">Send Message</h3>
                </div>

                <div className="d-flex py-2 mt-4">
                    <input type="text" className="form-control border-bottom" placeholder="Name" />
                    <input type="text" className="form-control border-bottom mx-lg-3" placeholder="Phone" />
                </div>
                <div className="my-3">
                    <input type="Email" className="form-control border-bottom" placeholder="Email" />
                    <textarea className="mt-4 border-bottom px-3" placeholder="Leave a Message"></textarea>
                </div>

                <div className="mt-3">
                    <div className="btn bg-black text-white px-5">Send</div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default HireMe