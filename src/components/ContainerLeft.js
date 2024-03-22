import React, { useState } from "react";
import { SiVorondesign } from "react-icons/si";
import { DiBackbone } from "react-icons/di";
import Accordion from "./Accordion";

const ContainerLeft = () => {
  return (
    <div className="border-solid border-2 border-gray-400 w-2/12 h-5/5   text-center rounded-lg text-sm">
      <div className="  flex text-center  border-2 border-black border-solid  ">
        <div className="bg-white shadow-md rounded-lg  ">
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
        <div>
          <p></p>
          <p></p>
          <div>
            <p></p>
            <button>Add billing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerLeft;
