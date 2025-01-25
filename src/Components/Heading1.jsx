import React from 'react'
import { Link } from 'react-router-dom'
const Heading1 = ({job}) => {
  return (
    <div className='flex p-4 justify-around my-6'>
      <div>
        <h1 className='text-3xl font-bold'>Featured {job}</h1>
        <p>Your Job for a Future</p>
      </div>
      <div className='cursor-pointer'>
        <p className='bg-orange-600 py-2 px-3 rounded-md mt-1'> <Link to="/FindJob">View All</Link></p>
      </div>
    </div>
  )
}

export default Heading1
