import React from "react";

import Dropdown from "./Dropdown";
const Table = () => {
 
  return (
    <div>
      <Dropdown/>
      <div>
        <table class="table-auto p-4  m-4">
          <thead className="">
            <tr className=" border">
              <th className="  p-4  m-4">Brand</th>
              <th className="  p-4  m-4">Description</th>
              <th className="  p-4  m-4">Members</th>
              <th className="  p-4  m-4">Categories</th>
              <th className="  p-4  m-4">Tags</th>
              <th className="  p-4  m-4">Next Meeting</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Table;
