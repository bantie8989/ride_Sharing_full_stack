import "./rideRequest.css"
import Confirmation from "./Confirmation Component/Confirmation"
import RideListing from "./Ride Listings Component/RideListing"
import SearchBar from "./SearchBar Component/SearchBar"
import Topbar from "../../HomePage/components/TopbarComponent/Topbar"
import Footer from "../../HomePage/components/FooterComponent/Footer"

function RideRequest() {
  return (
    <>
    <Topbar/>
    <SearchBar/>
    <RideListing/>
    {/* <RideBooking/> */}
    <Footer/>
    </>
  )
}

export default RideRequest