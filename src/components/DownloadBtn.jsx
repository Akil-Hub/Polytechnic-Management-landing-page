import React from 'react'
import { FaDownload } from "react-icons/fa";

const DownloadBtn = ({text}) => {
  return (
       <button className="bg-primary text-white px-6 h-12 rounded-lg  hover:bg-transparent border border-primary duration-500 hover:text-black flex items-center gap-3 ">
      {text}{' '} <FaDownload />

    </button>
  )
}

export default DownloadBtn