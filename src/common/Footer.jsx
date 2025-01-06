import React from 'react'
import FooterLogo from './../assets/images/png/Footer-logo-img.png'
import { FOOTER_LIST } from '../utils/helper'
import { FaceBookLogo, InstagramLogo, LinkedinLogo } from '../utils/icons'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='xl:pt-[356px] lg:pt-72 px-4 md:pt-48 sm:pt-36 bg-dark-blue -mt-1 pt-12' id='about'>
            <div className='max-w-[1140px] mx-auto flex justify-between max-sm:flex-col max-sm:justify-center max-sm:gap-10 max-sm:items-center'>
                <a href="/"><img className='xl:max-w-[150px] lg:max-w-28 md:max-w-24 max-w-20' src={FooterLogo} alt="footerLogo" /></a>
                <div className='flex flex-col gap-3.5'>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] max-sm:text-center text-white'>Quick Links</p>
                    {FOOTER_LIST.map((obj, index) => (
                        <a key={index} className='text-base leading-[20px] max-sm:text-sm max-sm:leading-[16px] text-light-pink hover:opacity-100  text-white opacity-[70%] cursor-pointer max-sm:text-center' href="/">{obj}</a>
                    ))}
                </div>
                <div className='flex flex-col'>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] text-white pb-3 text-whit max-sm:text-sm max-sm:text-center'>Send Us An E-mail</p>
                    <a className='text-base leading-[20px] max-sm:leading-[16px] text-light-pink max-sm:text-center text-white opacity-[70%] hover:opacity-100 cursor-pointer' href="mailto:info@echoai.ai">info@echoai.ai</a>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] lg:pt-8 pt-6 text-white max-sm:text-sm max-sm:text-center'>Send Us An E-mail</p>
                    <div className='flex gap-3 lg:pt-[18px] pt-4'>
                        <a target='_blank' href="https://www.linkedin.com/feed/"><LinkedinLogo /></a>
                        <a target='_blank' href="https://www.instagram.com/"><InstagramLogo /></a>
                        <a target='_blank' href="www.facebook.com"><FaceBookLogo /></a>
                    </div>
                </div>
            </div>
            <div className='flex max-w-[1140px] lg:pb-[30px] md:pb-5 sm:pb-4 pb-3 flex-col xl:pt-[60px] lg:pt-12 md:pt-10 pt-8 mx-auto'>
                <div className='footer-line h-0.5 w-full border-gradient-2' ></div>
                <p className='text-white text-center lg:pt-5 md:pt-4 pt-3 leading-[150%] max-sm:text-sm'>Copyright ECHO AI © {currentYear} | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer   