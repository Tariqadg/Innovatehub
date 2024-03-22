import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { LuFolders } from "react-icons/lu";

const Accordion = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <div className="mt-10">
        <div className="flex  mt-1justify-between w-full opacity-50 font-bold ">
            <p>FOLDERS</p>
            <button >+</button>
            
            
            
        </div>
      <div className=" relative  flex   rounded-lg text-center  w-full ">
        <button
          onClick={() => setIsOpen1((prev) => !prev)}
          className=" flex  justify-between w-full  font-semibold  border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"

        > <LuFolders className="w-6 h-6"/>
          < p > Products</p>
          {!isOpen1 ? (
            <AiOutlineCaretDown className="h-6 ml-8" />
          ) : (
            <AiOutlineCaretUp className="h-6" />
          )}
        </button>
        {isOpen1 && (
          <div classname="bg-blue-400 absolute  ">
            <div>
            <h3>Roadmap</h3>
            <p>Feedback</p>
            <p>Performance</p>
            <p>Team</p>
            </div>


          </div>
        )}
      </div>
      <div className=" relative flex flex-col items-center rounded-lg  text-center  w-full ">
        <button
          onClick={() => setIsOpen2((prev) => !prev)}
          className="flex  justify-between w-full  font-semibold  border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
        >
          Sales
          {!isOpen2 ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
        {isOpen2 && (
          <div classname="bg-blue-400 absolute w-10/12 ">
            <div>
            <h3>Roadmap</h3>
            <p>Feedback</p>
            <p>Performance</p>
            <p>Team</p>
            </div>
            
          </div>
        )}
      </div>
      <div className=" relative  flex flex-col items-center rounded-lg  text-center  w-full ">
        <button
          onClick={() => setIsOpen3((prev) => !prev)}
          className="flex  justify-between w-full  font-semibold  border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
        >
          Desing
          {!isOpen3 ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
        {isOpen3 && (
          <div classname="bg-blue-4000 absolute ">
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        )}
      </div>
      <div className=" relative  flex flex-col items-center rounded-lg  text-center  w-full ">
        <button
          onClick={() => setIsOpen4((prev) => !prev)}
          className="flex  justify-between w-full  font-semibold   border border-gray-300 border-1 rounded-lg hover:bg-gray-100 hover:shadow-md  hover:border-gray-300"
        >
          office
          {!isOpen4 ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
        {isOpen4 && (
          <div classname="bg-blue-4000 absolute ">
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
