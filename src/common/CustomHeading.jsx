import React from 'react'

const CommonHeading = (props) => {
    return (
        <h2 className={`font-semibold text-5xl text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl leading-[57.7px] max-md:leading-[50px] max-sm:leading-[40px] text-white ${props.className}`}>{props.title}</h2>
    )
}

export default CommonHeading