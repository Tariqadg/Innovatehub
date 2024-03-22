import { Dropdown } from '@mui/base'
import React from 'react'
import Navbar from './Navbar'
import Table from './Table'

const ContainerRight = () => {
  return (
    <div className='border-solid border-1 border-gray-200 w-9/12 p-4 '>
        <div>
            <Navbar/>
        </div>
        
        <div>
             
            <Table/>
        </div>
    </div>
  )
}

export default ContainerRight