import React from 'react'
import ContainerLeft from './ContainerLeft'
import ContainerRight from './ContainerRight'

const Body = () => {
  return (
    <div className='flex m-20 bg-white    h-4/5  '>
        <ContainerLeft/>
        <ContainerRight/>
    </div>
  )
}

export default Body