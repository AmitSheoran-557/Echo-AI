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
        <div className='py-[105px] bg-dark-blue px-5 max-lg:py-20 max-md:py-16 max-sm:py-12'>
            <CommonHeading className="!pb-[60px]" title={'FAQs'} />
            <div className='max-w-[1022px] flex flex-col gap-6 mx-auto'>
                {FAQ_LIST.map((item, index) => (
                    <div key={index} className={`rounded-xl pb-6 border border-solid  ${active === index ? 'border-sky-blue' : 'border-white border-opacity-10'}`}>
                        <button onClick={() => toggle(index)} className={`flex w-full pt-6 px-6 text-white justify-between bg-transparent items-center font-medium text-xl max-md:text-lg ${active === index ? 'pb-4' : ''}`}>{item.heading} <span className={`transition-all duration-300 ${active === index ? 'rotate-180 ' : ''}`}><DownArrow /></span></button>
                        <p className={`text-white max-md:text-sm overflow-hidden transition-all  px-6 duration-300 ${active === index ? 'max-h-32' : 'max-h-0'}`}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq