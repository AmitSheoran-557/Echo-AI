import React from 'react'

const Description = (props) => {
  return (
   <p className={`${props.className} lg:text-xl md:text-lg text-base text-center text-white !leading-[150%]`}>{props.title}</p>
  )
}

export default Description