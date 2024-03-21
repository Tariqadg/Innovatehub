import React from "react";

import Dropdown from "./Dropdown";
const Table = () => {
 
  return (
    <div>
      <Dropdown/>
      <div className="w-full">
        <table class="table-auto  ">
          <thead className="">
            <tr className=" border">
              <th className="  p-auto  m-2">Brand</th>
              <th className="  p-2  m-2">Description</th>
              <th className="  p-2  m-2">Members</th>
              <th className="  p-2  m-2">Categories</th>
              <th className="  p-2  m-2">Tags</th>
              <th className="  p-2  m-2">Next Meeting</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Table;
