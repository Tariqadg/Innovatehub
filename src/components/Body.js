import React from 'react'
import ContainerLeft from './ContainerLeft'
import ContainerRight from './ContainerRight'

const Body = () => {
  return (
    <div className='flex p-10 m-10 '>
        <ContainerLeft/>
        <ContainerRight/>
    </div>
  )
}

export default Body