// Displaying Rooms Component
// For the future: 
// Still needs to store information on a json file to have different room names, descriptions, and prices
// import { Link } from "react-router-dom";
// and add ctas to subpages with to="/accomodations/room1" 
import React from "react";

import SimpleSlider from "../sections/SlickSlider";

// Insert content prop
export default function Rooms({ content }) {

    // Flex direction variable to change based on type 
    // This allows me to use the same component while changing the layout of it
    const flexDirection = content === "reverse" ? "flex-row-reverse" : "flex-row";

    return (
        <div className="w-10/12 mx-auto mb-12">
            <div className={`md:flex md:justify-between gap-20 ${flexDirection}`}>
                <div className="w-full md:w-1/2">
                    <SimpleSlider />
                </div>

                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-playfair mb-4">Room Names</h1>
                    <p className="text-lg font-lato mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt, vel officia quibusdam alias ducimus sint placeat, aspernatur pariatur harum ipsam obcaecati, accusantium dolores! At doloremque error repellendus suscipit inventore?
                    </p>
                    <p className="text-2xl font-playfair">$200/night</p>
                </div>
            </div>
        </div>
    );
}
