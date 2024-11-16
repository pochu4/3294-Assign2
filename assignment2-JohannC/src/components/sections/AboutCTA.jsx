import React from "react";

// Router Import for the CTA Button
import { Link } from "react-router-dom";

export default function AboutCTA() {

    return (
        <div className="w-10/12 mx-auto mb-12">

            <h1 className="text-3xl font-playfair mb-4 md:w-1/6">Immerse Yourself in Nature</h1>

            <div className="md:flex md:justify-between">

                {/* Images Container */}
                <div className="md:flex md:justify-between md:items-start md:w-1/2">

                    <img src="../src/assets/spa.jpg" alt="Cove Resort" className="w-full h-auto max-h-40 object-cover md:max-h-96" />
                    <img src="../src/assets/flowers.jpg" alt="Cove Resort Pool!" className="w-8/12 h-auto max-h-40 object-cover my-4 md:my-0 md:ml-4 md:max-h-72" />

                </div>

                {/* Content Container w/ CTA */}
                <div className="md:w-1/2 md:ml-8">

                    <p className="font-lato text-lg"> ~Insert About Us Content~ Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae odio inventore facere illo rem quasi quidem saepe nobis doloremque accusamus maiores ipsa, nesciunt blanditiis, alias maxime excepturi fuga? Ab.</p>

                    <div className=" mt-4 flex items-center">

                        <Link to="/about" className="text-2xl font-playfair">Learn more</Link>
                        <div className="bg-black w-12 h-px ml-4"></div>

                    </div>
                </div>
            </div>
        </div>
    )

}