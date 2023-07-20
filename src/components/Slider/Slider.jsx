'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import React, {Suspense} from "react";
import Slider from "react-slick";



const VerticalMode = ({data}) => {

    const test = data.map((item) => {
        return item.img
    })
    const settings = {
        customPaging: function (i) {
            return (
                <img key={i} alt={''}
                     src={`${test[i]}`}/>
            )
                ;
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb mycustom",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
            <Slider className={'max-w-[500px] w-[50%] h-full z-10 w-full'} {...settings}>
                {data.map((image, index) => {
                    return <div key={index} className={'slider__div'}>
                        <img
                            className={'slider__img'}
                            src={`${image.img}`}
                            alt={''}/>
                    </div>
                })}
            </Slider>
    );
};

export default VerticalMode;
