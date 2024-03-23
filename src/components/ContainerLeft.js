import React, { useState } from "react";
import { SiVorondesign } from "react-icons/si";
import { DiBackbone } from "react-icons/di";
import Accordion from "./Accordion";
import { IoMdPersonAdd  } from "react-icons/io";
import { TbHelpSquareRounded } from "react-icons/tb";

const ContainerLeft = () => {
  return (
    <div className="border-solid border-2 border-gray-100 w-2/12 h-5/5   text-center rounded-lg text-sm">
      <div className="  flex text-center    ">
        <div className="bg-white shadow-sm rounded-lg  ">
          <div className="flex items-center space-x-12 ">
            <div>
              <DiBackbone className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h3 className="text-md font-semibold opacity-55">INC</h3>
              <p className="text-gray-600 text-l font-semibold">InnovateHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-1 p-1 ">
        <div className="mt-2 text-center  flex rounded-md h-8 hover:bg-gray-100 hover:shadow-lg  hover:border-gray-300">
          <SiVorondesign className=" opacity-70  w-6 h-7 m-[1px]" />
          <button className="border-gray-100 ml-2   font-semibold ">
            Desing Team
          </button>
          <button className="  ml-auto font-semibold bg-gray-100  border-gray-100 rounded-md">
            2X
          </button>
        </div>
        <div className="mt-2 text-center  flex rounded-md h-8 hover:bg-gray-100 hover:shadow-lg  hover:border-gray-300">
          <SiVorondesign className=" rounded-md opacity-70  w-6 h-7 m-[1px]" />
          <button className="border-gray-100 ml-2   font-semibold ">
            Marketing Team
          </button>
          <button className="  ml-auto font-semibold bg-gray-100  border-gray-100 rounded-md">
            2X
          </button>
        </div>
        <div className="mt-2 text-center  flex rounded-md h-8 hover:bg-gray-100 hover:shadow-lg  hover:border-gray-300">
          <SiVorondesign className=" opacity-70  w-6 h-7 m-[1px]" />
          <button className="border-gray-100 ml-2  font-semibold ">
            Development Team
          </button>
          <button className="  ml-auto font-semibold bg-gray-100  border-gray-100 rounded-md">
            2X
          </button>
        </div>
        <div className="mt-3 text-center  flex rounded-md h-8 hover:bg-gray-100 hover:shadow-lg  hover:border-gray-300">
          <SiVorondesign className=" opacity-40  w-6 h-7 m-[1px]" />
          <button className="border-gray-100 ml-2 opacity-40 font-semibold ">
            Create a Team
          </button>
          <button className="  ml-auto font-semibold bg-gray-100 opacity-40 border-gray-100 rounded-md">
            2X
          </button>
        </div>
        <div className="mt-15 ">
          <Accordion />
        </div>
        <div className=" pt-28 mt-8">
        <div className="  p-1 rounded-lg  text-center  w-full  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300 ">
          <h3 className="flex  space-x-4   font-semibold "><IoMdPersonAdd  className="w-5 h-5"/>Invite teammates </h3>
        </div>
        <div className="  p-1 rounded-lg  text-center  w-full  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300 ">
          <h3 className="flex  space-x-4   font-semibold "><TbHelpSquareRounded className="w-5 h-5"/>Help and first steps </h3>
        </div>
        <div className=" flex rounded-lg bg-gray-100 text-center justify-between  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300">
          <h3 className="p-1 flex  space-x-4   font-semibold m-1"> 7 Days left on trial</h3>
          <button className="bg-black text-white p-1 rounded-md m-1 mx-2 opacity-85">Adding a bill</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerLeft;
