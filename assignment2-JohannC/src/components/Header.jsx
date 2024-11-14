import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className="flex justify-between items-center my-6 px-8 md:px-32 m-auto">
            <a><img src="src/assets/logo.png" alt="Cove Logo" className="w-24" /></a>

            <ul className="hidden xl:flex items-end gap-12 font-semibold text-black">
                <li className="p-3  hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/" className="font-lato font-medium">Home</Link></li>
                <li className="p-3  hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/accomodations" className="font-lato font-medium">Accomodations</Link></li>
                <li className="p-3  hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/about" className="font-lato font-medium">About</Link></li>
            </ul>

            <div className="relative hidden md:flex items-center justify-center gap-3">
                {/* <IonIcon className="" name="cart-outline" style={{ fontSize: 24, color: 'white' }}></IonIcon> */}
                <Link to="accomodations" href="" className="text-black font-playfair font-medium text-xl">Book Now</Link>
            </div>

            <button className="block xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IonIcon name="menu" style={{ fontSize: 24, color: 'black' }}></IonIcon>
            </button>

            <div className={`absolute xl:hidden top-12 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer font-lato font-medium">Home</li>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer font-lato font-medium">Accomodations</li>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer font-lato font-medium">About</li>
                <li className="list-none w-full text-center p-4 hover:bg-red-300 hover:text-black transition-all cursor-pointer font-lato font-medium">Book Now</li>
            </div>
        </header>


    )

}
export default Header 