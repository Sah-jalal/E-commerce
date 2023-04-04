import React from 'react';
import img1 from "../../../images/carousel (1).jpg";
import img2 from "../../../images/carousel (2).jpg";
import img3 from "../../../images/carousel (3).jpg";
import img4 from "../../../images/carousel (4).jpg";

const Carousel = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} alt='' className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} alt='' className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} alt='' className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} alt='' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;