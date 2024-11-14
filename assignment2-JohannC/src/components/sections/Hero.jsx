import React, { useState, useEffect } from "react";
import heroContent from "./heroContent.json";

export default function Hero({ type = "home" }) {

    const [content, setContent] = useState({});

    useEffect(() => {
        if (heroContent[type]) {
            setContent(heroContent[type]);
        }
    }, [type]);


    return (

        <div>
            <div className="w-10/12 mx-auto text-center flex justify-center items-center flex-col my-12 lg:my-32 lg:mb-20">
                <p className="font-playfair text-xl">{content.subtitle}</p>
                <h1 className="font-playfair text-5xl font-medium">{content.title}</h1>
                <p className="font-playfair text-xl mt-2 max-w-96">{content.description}</p>
                <div className="bg-black w-px h-32 mt-16"></div>
            </div>

            <div className="flex justify-between items-center my-4 w-10/12 mx-auto flex-col lg:flex-row lg:gap">
            {content.imageUrls?.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`image ${index}`}
                        className="mb-4 w-full h-auto max-h-48 object-cover md:mb-0 md:w-[31%] md:h-full md:max-h-96"
                    />
                ))}
            </div>
        </div>

    )
}