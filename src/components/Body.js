import React from 'react'
import ContainerLeft from './ContainerLeft'
import ContainerRight from './ContainerRight'

const Body = () => {
  return (
    <div className='flex m-20 bg-white border-black   '>
        <ContainerLeft/>
        <ContainerRight/>
    </div>
  )
}

export default Body