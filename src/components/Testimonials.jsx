import React from "react";
import Slider from "react-slick";
import { FAQ_LIST } from "../utils/helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    {FAQ_LIST.map((obj, i) => (
                        <div key={i}>
                            <div className="max-w-[364px] w-full linear-background">
                                <h4 className="text-white">{obj.heading}</h4>
                                <p className="text-white">{obj.description}</p>
                                <div>
                                    <img src="" alt="" />
                                    <div>
                                        <p>{obj.profileName}</p>
                                        <p>{obj.profilePost}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Slider>
        </div>
    );
}

export default Testimonials;
