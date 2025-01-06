import React from 'react'
import FooterLogo from './../assets/images/png/Footer-logo-img.png'
import { FOOTER_LIST } from '../utils/helper'
import { FaceBookLogo, InstagramLogo, LinkedinLogo } from '../utils/icons'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='xl:pt-[356px] lg:pt-72 px-4 md:pt-48 sm:pt-36 bg-dark-blue -mt-1 pt-24'>
            <div className='max-w-[1140px] mx-auto flex justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-10'>
                <a href="/"><img className='max-w-[150px]' src={FooterLogo} alt="footerLogo" /></a>
                <div className='flex flex-col gap-3.5'>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] max-sm:text-center text-white'>Quick Links</p>
                    {FOOTER_LIST.map((obj, index) => (
                        <a key={index} className='text-base leading-[20px] max-sm:text-sm max-sm:leading-[16px] text-light-pink hover:opacity-100  text-white opacity-[70%] cursor-pointer max-sm:text-center' href="/">{obj}</a>
                    ))}
                </div>
                <div className='flex flex-col'>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] text-white pb-3 text-whit max-sm:text-sm max-sm:text-center'>Send Us An E-mail</p>
                    <a className='text-base leading-[20px] max-sm:leading-[16px] text-light-pink max-sm:text-center text-white opacity-[70%] hover:opacity-100 cursor-pointer' href="mailto:info@echoai.ai">info@echoai.ai</a>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] pt-8 text-white max-sm:text-sm max-sm:text-center'>Send Us An E-mail</p>
                    <div className='flex gap-3 pt-[18px]'>
                        <a target='_blank' href="https://www.linkedin.com/feed/"><LinkedinLogo /></a>
                        <a target='_blank' href="https://www.instagram.com/"><InstagramLogo /></a>
                        <a target='_blank' href="www.facebook.com"><FaceBookLogo /></a>
                    </div>
                </div>
            </div>
            <div className='flex max-w-[1140px] pb-[30px] flex-col pt-[60px] mx-auto'>
                <div className='footer-line h-0.5 w-full border-gradient-2' ></div>
                <p className='text-white text-center pt-5 leading-[150%] max-sm:text-sm'>Copyright ECHO AI © {currentYear} | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer   