import React from 'react'
import  { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { DiDropbox } from "react-icons/di";
import { LiaSortAlphaDownAltSolid } from "react-icons/lia";
import { GoFilter } from "react-icons/go";
import { MdOutlineSettingsInputSvideo } from "react-icons/md";
import { BiExport } from "react-icons/bi";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
  return (
    <div className="flex  ">
        <div className="py-2 flex flex-wrap  items-center rounded-lg">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-1 w-44 h-9  flex  my-3  border border-gray-300 border-1 rounded-lg"
          >
            <DiDropbox className="w-auto h-full" /> 
            ALL brands
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
        </div>
        <div className=" py-2 flex flex-col items-center rounded-lg">
          <button
            onClick={() => setIsOpen1((prev) => !prev)}
            className="p-1 w-18  h-9 flex mx-3 my-3  border border-gray-300 border-1 rounded-lg"
          >
            Desk
            {!isOpen1 ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
        </div>
        <div className=" py-2 flex flex-col items-center rounded-lg">
          <button
            onClick={() => setIsOpen2((prev) => !prev)}
            className="p-1  w-full h-9 flex  my-3 border border-gray-300 border-1 rounded-lg"
          >
            Tags
            {!isOpen2 ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
        </div>
        <div className=" p-2 flex flex-col items-center rounded-lg">
          <button
            onClick={() => setIsOpen3((prev) => !prev)}
            className="py-1  w-24 h-9  flex  my-3 border border-gray-300 border-1 rounded-lg"
          >
            <LiaSortAlphaDownAltSolid className="w-auto h-full" />
            Sorts
            {!isOpen3 ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
        </div>
        <div className=" py-2 flex flex-col items-center rounded-lg">
          <button
            onClick={() => setIsOpen4((prev) => !prev)}
            className=" p-1 flex h-9 px-4 my-3 border border-gray-300 border-1 rounded-lg"
          >
            <GoFilter className="w-auto h-full" /> 
            Filter
            {!isOpen4 ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
          
        </div>
        <div className=" ml-80 py-2 flex flex-col items-center rounded-lg">
          <button className='p-1 flex h-9 px-4 my-3 border border-gray-300 border-1 rounded-lg'>
            <MdOutlineSettingsInputSvideo  className="w-auto h-full"/>Meeting</button>
        </div>
        <div className="  mx-2 py-2 flex flex-col items-center rounded-lg">
          <button className='p-1 flex h-9 px-4 my-3 border border-gray-300 border-1 rounded-lg'><BiExport className="w-auto h-full"/>Import/Export</button>
        </div>
      </div>

  )
}

export default Dropdown