import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { LuFolders } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";


const Accordion = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  

  return (
    <div className="mt-10">
      <div className="flex  mt-1 justify-between w-full opacity-50 font-bold ">
        <p>FOLDERS</p>
        <button   ><FaPlus /></button>
      </div>
      <div className=" relative  flex flex-col items-start rounded-lg  text-center  w-full  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300  ">
        <button
          onClick={() => setIsOpen1((prev) => !prev)}
          className="flex  justify-between w-full  font-semibold  "
        >
          <LuFolders className="w-6 h-6" />
          Products
          {!isOpen1 ? (
            <AiOutlineCaretDown className="h-8 ml-36" />
          ) : (
            <AiOutlineCaretUp className="h-8 ml-36" />
          )}
        </button>
        {isOpen1 && (
          <div classname="bg-blue-400 absolute ">
            <div >
              <h3>Roadmap</h3>
              <h3>Feedback</h3>
              <h3>Performance</h3>
              <h3>Team</h3>
              <h3>
                <button className="flex  space-x-4   font-semibold opacity-55">
                  <IoIosAddCircleOutline />
                  Add new sub
                </button>
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className=" relative flex flex-col items-start rounded-lg  text-center  w-full  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300  ">
        <button
          onClick={() => setIsOpen2((prev) => !prev)}
          className="flex  justify-between w-full  font-semibold  "
        >
         
          <LuFolders className="w-6 h-6" />
          Sales
          {!isOpen2 ? (
            <AiOutlineCaretDown className="h-8 ml-36" />
          ) : (
            <AiOutlineCaretUp className="h-8 ml-36" />
          )}
        </button>
        {isOpen2 && (
          <div classname="bg-blue-400 absolute w-10/12 ">
            <div>
            <h3>Roadmap</h3>
              <h3>Feedback</h3>
              <h3>Performance</h3>
              <h3>Team</h3>
              <h3>
                <button className="flex  space-x-4   font-semibold opacity-55">
                  <IoIosAddCircleOutline />
                  Add new sub
                </button>
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className=" relative  flex flex-col items-start rounded-lg  text-center  w-full  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300 ">
        <button
          onClick={() => setIsOpen3((prev) => !prev)}
          className="flex  justify-between w-full  font-semibold  "
        >
          <LuFolders className="w-6 h-6" />
          Desing
          {!isOpen3 ? (
            <AiOutlineCaretDown className="h-8 ml-36" />
          ) : (
            <AiOutlineCaretUp className="h-8 ml-36" />
          )}
        </button>
        {isOpen3 && (
          <div classname="bg-blue-4000 absolute ">
            <div>
            <h3>Roadmap</h3>
              <h3>Feedback</h3>
              <h3>Performance</h3>
              <h3>Team</h3>
              <h3>
                <button className="flex  space-x-4   font-semibold opacity-55">
                  <IoIosAddCircleOutline />
                  Add new sub
                </button>
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className=" relative text-center flex flex-col items-start rounded-lg   w-full  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300  ">
        <button
          onClick={() => setIsOpen4((prev) => !prev)}
          className="flex  justify-between w-full  font-semibold  "
        >
          <LuFolders className="w-6 h-6" />
          office
          {!isOpen4 ? (
            <AiOutlineCaretDown className="h-8 ml-36" />
          ) : (
            <AiOutlineCaretUp className="h-8 ml-36" />
          )}
        </button>
        {isOpen4 && (
          <div classname="bg-blue-400 ">
            <div>
            <h3>Roadmap</h3>
              <h3>Feedback</h3>
              <h3>Performance</h3>
              <h3>Team</h3>
              <h3>
                <button className="flex  space-x-4   font-semibold opacity-55">
                  <IoIosAddCircleOutline />
                  Add new sub
                </button>
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
