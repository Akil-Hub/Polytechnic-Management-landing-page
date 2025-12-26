import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-primary text-white px-18 md:px-6 md:h-12 h-7  rounded-lg  hover:bg-transparent border border-primary duration-500 hover:text-black ">
      {text}{' '}
    </button>
  )
}

export default Button