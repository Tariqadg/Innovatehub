import React from "react";
import TagTablet from "./TagTablet.js";

function TableRow({
  Brand,
  description,
  Members,
  Categories,
  Tags,
  NextMeeting,
}) {
  return (
    <div className="flex flex-row border">
      <div className="p-auto m-2">
        <input type="checkbox" /> {Brand}
      </div>
      <div
        className="w-60 h-20 p-2 m-2 overflow-clip"
        
      >
        {description}
      </div>
      <div
        className="p-2 m-2"
        
      ></div>
      <div
        className="p-2 m-2"
        
      >
        {Categories}
      </div>
      <div className=" p-2 m-2 flex overflow-x-scroll w-30" >
        {Tags?.map((tag, index) => (
          <TagTablet key={index} tag={tag} />
        ))}
      </div>
      <div className="p-2 m-2">
        <div className="border-red-600 bg-red-400 rounded-lg p-1 opacity-70">
          <p className="border-0">{NextMeeting}</p>
        </div>
      </div>
    </div>
  );
}

export default TableRow;
