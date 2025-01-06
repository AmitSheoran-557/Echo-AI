import React from 'react'
import Header from '../common/Header'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import RobotImg from './../assets/images/png/robot-img.png'
import circleImg from './../assets/images/png/round-circle-img.png'

const Hero = () => {
    return (
        <div className='bg-hero-bg bg-cover bg-no-repeat bg-center relative lg:pb-[260px] bg-black max-xl:px-4'>
            <img className="absolute pointer-events-none xl:max-w-xl lg:max-w-xs md:max-w-64 sm:max-w-48 max-w-36 left-0 xl:top-[20%] lg:top-[45%] md:top-[55%] sm:top-[60%] top-[70%]" src={circleImg} alt="circle-img" />
            <Header />
            <div className="container mx-auto max-w-[1140px] xl:pt-[166px] lg:pt-32 md:pt-28 sm:pt-24 pt-16">
                <div className="flex flex-wrap">
                    <div className="lg:w-8/12 w-full">
                        <div className='flex flex-col'>
                            <h1 className='lg:mb-6 mb-4 font-bold xl:text-7xl lg:text-5xl text-4xl text-center xl:max-w-[705px] lg:max-w-2xl mx-auto text-white !leading-[120%]'>Innovate, Automate, Accelerate </h1>
                            <Description className="lg:mb-6 mb-4" title="Next Gen AI Automation to Scale Your Business." />
                            <CustomButton className="lg:!px-[38px] !px-6 lg:!py-[19.5px] md:!py-4 !py-3 max-w-max mx-auto" title="Book A Call Now!" />
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full lg:mt-0 md:mt-10 mt-7">
                        <img className='lg:absolute xl:max-w-[540px] md:max-w-sm mx-auto max-w-xs xl:translate-y-5 xl:right-0 right-10 top-40' src={RobotImg} alt="robot-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero