import React from "react";
import { useState } from "react";
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
      <div className="pt-2 flex flex-wrap  items-center rounded-lg  ">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-1 w-44 h-9  flex  my-3  border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
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
      <div className=" pt-2 flex flex-col items-center rounded-lg">
        <button
          onClick={() => setIsOpen1((prev) => !prev)}
          className="p-1 w-18  h-9 flex mx-3 my-3  border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
        >
          Desk
          {!isOpen1 ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
      </div>
      <div className=" pt-2 flex flex-col items-center rounded-lg ">
        <button
          onClick={() => setIsOpen2((prev) => !prev)}
          className="p-1  w-full h-9 flex  my-3 border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
        >
          Tags
          {!isOpen2 ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
      </div>
      <div className=" pt-2  ml-5 flex flex-col items-center rounded-lg ">
        <button
          onClick={() => setIsOpen3((prev) => !prev)}
          className="py-1  w-20 h-9  flex  my-3 border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
        >
          <LiaSortAlphaDownAltSolid className="w-auto h-full" />
          Sorts
          
        </button>
      </div>
      <div className=" pt-2 flex ml-2 flex-col items-center rounded-lg ">
        <button
          onClick={() => setIsOpen4((prev) => !prev)}
          className=" p-1 flex h-9 px-4 my-3 justify-between border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
        >
          <GoFilter className="w-auto justify-between h-full" />
          Filter
         
        </button>
      </div>
      <div className=" ml-80 pt-2 flex flex-col items-center rounded-lg ">
        <button className="p-1 flex h-9 px-4 my-3 border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300">
          <MdOutlineSettingsInputSvideo className="w-auto justify-between h-full" />
          Meeting
        </button>
      </div>
      <div className="  mx-2 pt-2 flex flex-col items-center rounded-lg ">
        <button className="p-1 flex h-9 px-4 my-3  border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300">
          <BiExport className="w-auto h-full" />
          Import/Export
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
