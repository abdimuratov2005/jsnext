'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import React, {Suspense, useEffect, useRef, useState} from "react";
import Slider from "react-slick";

const VerticalMode = ({data}) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    useEffect(() => {
        setNav1(slider1Ref.current);
        setNav2(slider2Ref.current);
    }, []);

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
        dots: false,
        dotsClass: "slick-dots slick-thumb mycustom",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settingsTwo = {
        centerPadding: 50,
        arrows: false
    }

    return (
        <>
            <Slider asNavFor={nav2} ref={slider1Ref} className={'max-w-[500px] w-[50%] h-full z-10 w-full'} {...settings}>
                {data.map((image, index) => {
                    return <div key={index} className={'slider__div'}>
                        <img
                            className={'slider__img'}
                            src={`${image.img}`}
                            alt={''}/>
                    </div>
                })}
            </Slider>

            <Slider
                {...settings}
                asNavFor={nav1}
                ref={slider2Ref}
                slidesToShow={6}
                swipeToSlide={true}
                focusOnSelect={true}
            >

                {data.map((image, index) => {
                    return (
                        <div key={index} className={'slider__div flex'}>
                            <img
                                key={index}
                                className={'slider__img'}
                                src={`${image.img}`}
                                alt={''}/>
                        </div>
                        )
                })}

            </Slider>
        </>

    );
};

export default VerticalMode;
