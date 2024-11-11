import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className="flex justify-between items-center drop-shadow-md my-6 px-8 md:px-32 m-auto border-b-8 ">
            <a><img src="src/assets/logo.png" alt="Po's Pets" className="w-24" /></a>

            <ul className="hidden xl:flex items-end gap-12 font-semibold text-black">
                <li className="p-3  hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/">Home</Link></li>
                <li className="p-3  hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/shop">Accomodations</Link></li>
                <li className="p-3  hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/about">About</Link></li>
            </ul>

            <div className="relative hidden md:flex items-center justify-center gap-3">
                {/* <IonIcon className="" name="cart-outline" style={{ fontSize: 24, color: 'white' }}></IonIcon> */}
                <a href="" className="text-black">Book Now</a>
            </div>

            <button className="block xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IonIcon name="menu" style={{ fontSize: 24, color: 'black' }}></IonIcon>
            </button>

            <div className={`absolute xl:hidden top-8 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer">Home</li>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer">Accomodations</li>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer">About</li>
                <li className="list-none w-full text-center p-4 hover:bg-red-300 hover:text-black transition-all cursor-pointer">Book Now</li>
            </div>
        </header>


    )

}
export default Header 