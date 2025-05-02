import { IoMdSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import "./Navbar.css"

function Navbar(){
    return (
        <div className="navbar">
            <div className="left_nav">
                <h1>MCA WALA</h1>
            </div>
            <div className="right_nav">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>GALLARY</li>
                <li>SERVICES</li>
                <li>CONTACT US</li>
                <li>
                    <IoMdSearch />
                </li>
            </div>
            <div className="menu">
                <MdMenu />
            </div>
        </div>
    )
}
export default Navbar;