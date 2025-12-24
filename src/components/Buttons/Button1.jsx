import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Button1 = ({text}) => {
  return (
      <button className="bg-primary text-white px-6 h-12 rounded-lg  hover:bg-white  duration-500 hover:text-black flex items-center gap-2 ">
      {text}{' '}<FaArrowRight />

    </button>
  )
}

export default Button1