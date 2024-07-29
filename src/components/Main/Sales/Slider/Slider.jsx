import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

import SalesImg1 from "../../../../img/sales/Motorola_Razr_40_1.png";
import SalesImg2 from "../../../../img/sales/Motorola_Razr_40_2.png";
import SalesImg3 from "../../../../img/sales/Xiaomi_14_Ultra.png";


function SimpleSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div>
                <div className='sales__list'>
                    <img className='sales__img' src={SalesImg1} alt='img'/>
                    <div className='sales__text__container'>
                        <p className='sales__text__name'>Motorola Razr 40</p>
                        <p className='sales__text__desc'>Операционная система: Android 13</p>
                        <p className='sales__text__desc'>Оперативная память: 8 Gb</p>
                        <p className='sales__text__desc'>Постоянная память: 256 Gb</p>
                        <p className='sales__text__desc'>Процессор: Snapdragon 7 Gen 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='sales__list'>
                    <img className='sales__img'  src={SalesImg2} alt='img'/>
                    <div className='sales__text__container'>
                        <p className='sales__text__name'>Motorola Razr 40</p>
                        <p className='sales__text__desc'>Операционная система: Android 13</p>
                        <p className='sales__text__desc'>Оперативная память: 8 Gb</p>
                        <p className='sales__text__desc'>Постоянная память: 256 Gb</p>
                        <p className='sales__text__desc'>Процессор: Snapdragon 7 Gen 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='sales__list'>
                    <img className='sales__img'  src={SalesImg3} alt='img'/>
                    <div className='sales__text__container'>
                        <p className='sales__text__name'>Xiaomi 14 Ultra</p>
                        <p className='sales__text__desc'>Операционная система: Android 13</p>
                        <p className='sales__text__desc'>Оперативная память: 8 Gb</p>
                        <p className='sales__text__desc'>Постоянная память: 256 Gb</p>
                        <p className='sales__text__desc'>Процессор: Snapdragon 7 Gen 1</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='sales__list'>
                    <img className='sales__img'  src={SalesImg2} alt='img'/>
                    <div className='sales__text__container'>
                        <p className='sales__text__name'>Motorola Razr 40</p>
                        <p className='sales__text__desc'>Операционная система: Android 13</p>
                        <p className='sales__text__desc'>Оперативная память: 8 Gb</p>
                        <p className='sales__text__desc'>Постоянная память: 256 Gb</p>
                        <p className='sales__text__desc'>Процессор: Snapdragon 7 Gen 1</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}
export default SimpleSlider;