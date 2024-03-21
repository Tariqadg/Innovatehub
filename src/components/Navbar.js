import React from 'react'


const Navbar = () => {
    return (
      <div className=" flex flex-wrap p-2 justify-between shadow-sm border-solid border-1 border-gray-100 rounded-sm">
            <div className="">
            <h1 className='font-semibold text-2xl'>Products</h1>
            </div>
            <div className="" >
            <ul className='flex flex-wrap '>
            <li>
            <input 
            
              className= "border-solid border-2 border-gray-200 rounded-md mx-2"
              type="text"
              
              placeholder= "🔍Search..."
            //   className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            /></li>
            
            <li className='mx-2'>
            <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/copy.png" alt="copy"/>
            </li>
            <li className='mx-2'>
            <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/settings.png" alt="settings"/>
            </li>

            </ul>
          </div>
    
      </div>
    );
  };
  
  export default Navbar;