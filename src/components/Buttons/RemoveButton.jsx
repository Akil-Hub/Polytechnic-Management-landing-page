import React from 'react'

const RemoveButton = ({text}) => {
  return (
   <button className="bg-red-500 text-white px-18 md:px-6 md:h-12 h-7  rounded-lg  hover:bg-transparent border border-red-500 duration-500 hover:text-red-500 ">
      {text}{' '}
    </button>
  )
}

export default RemoveButton