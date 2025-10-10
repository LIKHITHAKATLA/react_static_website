import "./ContactUs.css"
function ContactUs(){
    return(
        <div id="contact">
            <h1 className="cont">CONTACT US</h1>
        <div className="contactus">
            <div className="contactus_left">
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="email" name="Email" placeholder="Email"/>
                    <input type="number" name="Number" placeholder="Number" id="" />
                    <input type="text" name="Message" placeholder="Message" id="" />
                    <button>SEND</button>
                </form>
            </div>

            <div className="contactus_right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.287667563703!2d78.39912837435925!3d17.49377608341174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f30076cb0f%3A0xd71e8dba19e3b3ae!2sKPHB%20METRO!5e0!3m2!1sen!2sin!4v1745785525638!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
                

            </div>
        </div>
        </div>

    )
}
export default ContactUs;