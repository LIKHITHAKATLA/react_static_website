import "./Services.css"
import { TbCup } from "react-icons/tb";
import { BsCupHotFill } from "react-icons/bs";
import { BsFillCupFill } from "react-icons/bs";

function Services(){
    return(
        <div id="Services">
            <div className="services_top">
                <h1>Services</h1>
                <p>Typesetting industry lorem Ipsum is simply dummy text of the</p>
            </div>
            <div className="services_cards">
                <div className="card">
                    <TbCup />
                    <h2>Original Coffee</h2>
                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                    <div>
                        <button>READ MORE</button>
                    </div>

                </div>
                <div className="card">
                    <BsCupHotFill />
                    <h2>20 Coffee Flavors</h2>
                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                    <div>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="card">
                    <BsFillCupFill />
                    <h2>20 Coffee Flavors</h2>
                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                    <div>
                        <button>READ MORE</button>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}
export default Services;