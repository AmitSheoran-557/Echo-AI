import React from "react";
import Slider from "react-slick";
import { TESTIMONIALS_LIST } from "../utils/helper";
import CommonHeading from '../common/CustomHeading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };
    return (
        <div className="bg-dark-blue -mt-[1px] lg:pb-[210px] pb-80 relative">
            <div className="container max-w-[1140px] mx-auto max-xl:px-4">
                <CommonHeading className="!pb-[40px]" title={'Testimonials'} />
                <div className="xl:max-w-[1140px] lg:max-w-[770px] max-w-3xl mx-auto">
                    <Slider {...settings}>
                        {TESTIMONIALS_LIST.map((obj, i) => (
                            <div key={i}>
                                <div className="max-w-[364px] lg:min-h-[289px] min-h-64 w-full pt-6 px-6 rounded-3xl linear-background bg-dark-blue">
                                    <h4 className="text-white font-medium lg:text-2xl md:text-xl text-lg lg:mb-2 mb-1 !leading-[28px]">{obj.heading}</h4>
                                    <p className="text-white lg:text-base sm:text-sm text-xs !leading-[24px] opacity-[80%] lg:mb-12 mb-8">{obj.description}</p>
                                    <div className="flex lg:gap-2 gap-1 items-center absolute bottom-0">
                                        <img className="xl:size-[60px] lg:size-12 size-10" src={obj.profileImg} alt="user-profile-img" />
                                        <div>
                                            <p className="font-medium lg:text-xl text-lg !leading-[28px] text-white">{obj.profileName}</p>
                                            <p className="lg:text-base text-sm !leading-[28px] text-white">{obj.profilePost}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
