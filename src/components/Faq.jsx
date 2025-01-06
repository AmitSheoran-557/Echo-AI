import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'
import CommonHeading from '../common/CustomHeading'
import { DownArrow } from '../utils/icons'


const Faq = () => {
    const [active, setActive] = useState(0)
    const toggle = (index) => {
        setActive(active === index ? null : index)
    }

    return (
        <div className='-mt-[1px] bg-dark-blue px-4' id='faq'>
            <CommonHeading className="xl:!pb-[60px] lg:!pb-12 md:pb-9 sm:pb-7 pb-5" title={'FAQs'} />
            <div className='max-w-[1022px] flex flex-col xl:gap-6 lg:gap-5 gap-4 mx-auto'>
                {FAQ_LIST.map((item, index) => (
                    <div key={index} className={`rounded-xl xl:pb-[21.5px] lg:pb-5 sm:pb-4 pb-3 border border-solid  ${active === index ? 'border-gradient-3 rounded-3xl' : 'border-white border-opacity-10'}`}>
                        <button onClick={() => toggle(index)} className={`flex w-full xl:pt-[21.5px] lg:pt-5 sm:pt-4 pt-3 xl:px-6 lg:px-5 px-4 text-white justify-between text-start bg-transparent items-center font-medium lg:text-xl md:text-lg text-base ${active === index ? 'lg:pb-4 md:pb-3 pb-2' : ''}`}> <span className='max-lg:pe-7'>{item.heading} </span><span className={`transition-all duration-300 ${active === index ? 'rotate-180 ' : ''}`}><DownArrow /></span></button>
                        <p className={`text-white max-md:text-sm overflow-hidden transition-all px-6 duration-300 ${active === index ? 'lg:max-h-32 max-h-56' : 'max-h-0'}`}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq