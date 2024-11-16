import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        initialSlide: 0,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "0px",
                    padding: "1px",
                }}
            >
                <ul style={{ margin: "2px", display: "flex", justifyContent: "center", gap: "10px"}}>
                    {dots}
                </ul>
            </div>
        ),
    };
    return (
        <Slider {...settings} className="mb-12">
            <div className="mr-4">
                <img src="../src/assets/resort-pool-1.jpg" alt="Cove Resort" className="w-full h-auto max-h-72 object-cover md:max-h-96" />
            </div>
            <div>
                <img src="../src/assets/flowers.jpg" alt="Cove Resort" className="w-full h-auto max-h-72 object-cover md:max-h-96" />
            </div>
            <div>
                <img src="../src/assets/roomdeluxe.jpg" alt="Cove Resort" className="w-full h-auto max-h-72 object-cover md:max-h-96" />
            </div>
            <div>
                <img src="../src/assets/resort1.jpeg" alt="Cove Resort" className="w-full h-auto max-h-72 object-cover md:max-h-96" />
            </div>
            <div>
                <img src="../src/assets/resort2.jpeg" alt="Cove Resort" className="w-full h-auto max-h-72 object-cover md:max-h-96" />
            </div>
            <div>
                <img src="../src/assets/spa.jpg" alt="Cove Resort" className="w-full h-auto max-h-72 object-cover md:max-h-96" />
            </div>
        </Slider>
    );
}