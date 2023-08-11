import React from "react";
import "./HeaderSlider.scss";
import Slider from "react-slick";

import {images} from "../utils/images";
function HeaderSlider(props) {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
        <div className="banner-header">
          <Slider {...settings}>
          <div className="item-slider">
              <img src={images[0]} alt=""></img>
            </div>
            <div className="item-slider">
               <img src={images[1]} alt=""/>
            </div>
            <div className="item-slider">
              <img src={images[2]} alt=""></img>
            </div>
            <div className="item-slider">
              <img src={images[3]} alt=""></img>
            </div>
            <div className="item-slider">
              <img src={images[4]} alt=""></img>
            </div>
          </Slider>
        </div>
    </div>
  );
}

export default HeaderSlider;
