import React, {useState, useEffect} from "react";
import pageIntro from "./pageIntro.json";

export default function Introduction({type="home"}) {

    const [intro, introData] = useState({})

    useEffect(() => {
        if(pageIntro[type]) {
            introData(pageIntro[type]);
        }
    }, [type])

    return (

        <div className=" w-10/12 mx-auto text-center flex justify-center items-center my-20">
            <h2 className="font-playfair text-2xl md:w-1/3 md:w-full">{intro.title}</h2>
        </div>

    )

}