import "./Footer.css"
import { LuMapPin } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Footer(){
    return(
        <div id="footer">
            <div className="footer1">
            <div className="footer_about">
                <h2>About</h2>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
            </div>
            <div className="footer_home">
                <h2>Menu</h2>
                <p>Home</p>
                <p>About us</p>
                <p>Gallary</p>
                <p>Services</p>
                <p>Contact Us</p>
            </div>
            <div className="useful_links">
                <h2>Useful Links</h2>
                <p>Special</p>
                <p>Regular</p>
                <p>Hot Coffee</p>
                <p>Cold Coffee</p>
            </div>
            <div className="footer_contact">
                <h2>Contact Us</h2>
                <p><LuMapPin />  Address:Hyderbad</p>
                <p><IoMdCall />Call: +91-9876543210</p>
                <p><MdEmail />Email: likhitha@gmail.com</p>
            </div>
            </div>

            <div className="footer2">
                <p>All rights reserved by Likhitha</p>
            </div>

        </div>

    )
}
export default Footer;