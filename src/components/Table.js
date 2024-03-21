import React from 'react'

const Table = () => {
  return (
    <div>
        <div>
            <ul>
                <li>All Brands</li>
                <li>Desk</li>
                <li>Tags</li>
                <li>Sort</li>
                <li>Filter</li>
            </ul>
        </div>

    
    <div>
    <table class="table-auto">
    <thead>
      <tr>
        <th>Brand</th>
        <th>Description</th>
        <th>Members</th>
        <th>Categories</th>
        <th>Tags</th>
        <th>Next Meeting</th>


      </tr>
    </thead>
    </table>
    </div>
    </div>
  )
}

export default Table