import React from 'react'

const CustomButton = (props) => {
    return (
        <button className={`${props.className} text-white font-semibold lg:text-xl text-base lg:px-8 px-6 lg:py-[13.5px] py-2.5 rounded-full button-gradient !leading-[126%]`}>{props.title}</button>

    )
}

export default CustomButton