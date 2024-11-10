import React, { useState } from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

function Header() {

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center drop-shadow-md text-white py-6 px-8 md:px-32 m-auto border-b-8 border-yellow-600 bg-yellow-600">
            <a><img src="src/assets/logo.png" alt="Po's Pets" className="w-24" /></a>

            <ul className="hidden xl:flex items-end gap-12 font-semibold text-white">
                <li className="p-3 rounded-3xl hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/">Home</Link></li>
                <li className="p-3 rounded-3xl hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/shop">Shop</Link></li>
                <li className="p-3 rounded-3xl hover:bg-yellow-300 hover:text-black transition-all cursor-pointer"><Link to="/about">About</Link></li>
            </ul>

            <div className="relative hidden md:flex items-center justify-center gap-3">
                <IonIcon className="" name="cart-outline" style={{ fontSize: 24, color: 'white' }}></IonIcon>
            </div>

            <button className="block xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IonIcon name="menu" style={{ fontSize: 24, color: 'white' }}></IonIcon>
            </button>

            <div className={`absolute xl:hidden top-20 left-0 w-full bg-yellow-600 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer">HOME</li>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer">SHOP</li>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer">ABOUT</li>
                <li className="list-none w-full text-center p-4 hover:bg-yellow-300 hover:text-black transition-all cursor-pointer">CART</li>
            </div>
        </header>

    )

}
export default Header 