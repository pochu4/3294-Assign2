import React, { useState, useEffect } from "react";

// Importing Content from JSON file storing data for the text and image content
import heroContent from "./heroContent.json";
 
// Hero Function with contentType prop
// Probably should have been set to content for consistency of prop usages all throughout the components however, I had already set "content" as a variable within the function below
// nvm!
export default function Hero({ content }) {

    const variant = heroContent[content];

    return (
        <div>
            <div className="w-10/12 mx-auto text-center flex justify-center items-center flex-col my-12 lg:my-32 lg:mb-20">
                <p className="font-playfair text-xl">{variant.subtitle}</p>
                <h1 className="font-playfair text-5xl font-medium">{variant.title}</h1>
                <p className="font-playfair text-xl mt-2 max-w-96">{variant.description}</p>
                <div className="bg-black w-px h-32 mt-16"></div>
            </div>

            <div className="flex justify-between items-center my-4 w-10/12 mx-auto flex-col lg:flex-row lg:gap">
                {variant.imageUrls?.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`image ${index}`}
                        className="mb-4 w-full h-auto max-h-48 object-cover md:mb-0 md:w-[31%] md:h-full md:max-h-96"
                    />
                ))}
            </div>
        </div>
    );
}