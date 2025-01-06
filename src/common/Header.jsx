import React, { useState } from 'react'
import pageLogo from './../assets/images/png/page-logo-img.png'
import { HEADER_LIST } from '../utils/helper'
import CustomButton from './CustomButton'

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='flex justify-between items-center max-w-[1140px] mx-auto lg:py-[14px] py-3'>
            <button onClick={handleOpen}
                className={`hidden size-6 justify-center max-lg:absolute max-lg:right-4 relative z-[60] max-lg:flex flex-col overflow-hidden`} >
                <span className={`w-6 transition-all duration-300 h-[1.9px] bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`} >
                </span>
                <span className={`w-6 transition-all duration-300 h-[2.333px] bg-white rounded-md mb-1 ${open ? 'hidden' : ''}`}>
                </span>
                <span className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10' : ''}`}>
                </span>
            </button>

            <img className='xl:max-w-48 lg:max-w-40 max-w-28 max-h-[72px]' src={pageLogo} alt="page-logo" />
            <div className={`flex gap-[42px] !text-black max-lg:text-white lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-black max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? 'max-lg:left-0' : 'max-lg:left-full'}`}>
                {HEADER_LIST.map((obj, i) => (
                    <div key={i}>
                        <a onClick={handleOpen} className='text-white' href={obj.link}>{obj.title}</a>
                    </div>
                ))}
                <CustomButton title="Get Started" className="max-lg:block lg:hidden" />
            </div>
            <CustomButton title="Get Started" className="max-lg:hidden lg:block" />
        </div>
    )
}

export default Header   