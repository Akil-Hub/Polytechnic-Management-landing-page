import React from 'react'

const LargeBtn = ({text}) => {
  return (
      <button className="bg-primary text-white px-24 h-12 rounded-lg  hover:bg-transparent border border-primary duration-500 hover:text-black ">
      {text}{' '}
    </button>
  )
  
}

export default LargeBtn