import React from 'react'
import Header from '../common/Header'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import RobotImg from './../assets/images/png/robot-img.png'

const Hero = () => {
    return (
        <div className='bg-hero-bg bg-cover bg-no-repeat bg-center min-h-screen relative bg-black'>
            <Header />
            <div className="container mx-auto max-w-[1140px] lg:pt-[166px]">
                <div className="flex flex-wrap">
                    <div className="lg:w-8/12 w-full">
                        <div className='flex flex-col'>
                            <h1 className='lg:mb-6 mb-4 font-bold lg:text-7xl text-center max-w-[705px] text-white !leading-[120%]'>Innovate, Automate, Accelerate </h1>
                            <Description className="lg:mb-6 mb-4" title="Next Gen AI Automation to Scale Your Business." />
                            <CustomButton className="lg:!px-[38px] !px-6 lg:!py-[19.5px] md:!py-4 !py-3 max-w-max mx-auto" title="Book A Call Now!" />
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full">
                        <img className='lg:absolute max-w-[470px] right-20 top-40' src={RobotImg} alt="robot-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero