import React from 'react'
import { FaDownload } from "react-icons/fa";

const DownloadBtn = ({text}) => {
  return (
       <button className="bg-primary text-white px-22 md:px-2
        md:px-6 h-7 md:h-12 rounded-lg  hover:bg-transparent border border-primary duration-500 hover:text-black flex items-center md:gap-3 gap-2 text-sm md:text-base  ">
      {text}{' '} <FaDownload />

    </button>
  )
}

export default DownloadBtn