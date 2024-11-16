import React from "react";

// Router Import for the CTA Button
import { Link } from "react-router-dom";

// I chose to store the content within the component rather than json for this example
const contentVariants = {
    home: {
        title: "Immerse Yourself in Nature",
        description: " About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content About Us Content",
        imageUrls: [
            "../src/assets/resort-pool-1.jpg",
            "../src/assets/flowers.jpg"
        ],
        cta: {
            text: "Learn More",
            link: "/about",
        },
    },
    about: {
        title: "Thoughtfully Crafted Accomodations",
        description:
            " Accomodation Content Accomodation Content Accomodation Content Accomodation Content Accomodation Content Accomodation Content Accomodation Content Accomodation Content Accomodation Content Accomodation Content Accomodation Content",
        imageUrls: [
            "../src/assets/flowers.jpg",
            "../src/assets/resort2.jpeg"
        ],
        cta: {
            text: "See Our Rooms",
            link: "/accomodations",
        },
    },
};


export default function ContentCTA({content}) {

    const variant = contentVariants[content];

    return (
        <div className="w-10/12 mx-auto mb-12">

            <h1 className="text-3xl font-playfair mb-4 md:w-1/6">{variant.title}</h1>

            <div className="md:flex md:justify-between">

                {/* Images Container */}
                <div className="md:flex md:justify-between md:items-start md:w-1/2">

                    {/* Index Number of Image */}
                    {/* For this section I chose to use the index numbers rather than mapping through (like the hero images)*/}
                    {/* This is because the image tags have different css tags attached to it */}
                    <img src={variant.imageUrls[0]} alt="Cove Resort" className="w-full h-auto max-h-40 object-cover md:max-h-96" />
                    <img src={variant.imageUrls[1]} alt="Cove Resort Pool!" className="w-8/12 h-auto max-h-40 object-cover my-4 md:my-0 md:ml-4 md:max-h-72" />
                    
                </div>

                {/* Content Container w/ CTA */}
                <div className="md:w-1/2 md:ml-8">

                    <p className="font-lato text-lg">{variant.description}</p>

                    <div className="mt-4 flex items-center">

                        <Link to={variant.cta.link} className="text-2xl font-playfair">{variant.cta.text}</Link>
                        <div className="bg-black w-20 h-px ml-4"></div>

                    </div>
                </div>
            </div>
        </div>
    )

}