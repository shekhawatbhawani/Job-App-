import React from 'react'

const ImageFoot = () => {
  return (
    <div className='bg-black mt-3 flex flex-col md:flex-row p-6 justify-start md:justify-evenly w-full'>
    <p className='text-white mb-4 md:mb-0'>100+ Registered Members</p>
    <p className='text-white mb-4 md:mb-0'>300 Jobs Found</p>
    <p className='text-white mb-4 md:mb-0'>632 Best Companies</p>
    <p className='text-black bg-white rounded-md py-1 px-3 cursor-pointer hover:bg-black hover:text-white border-2 border-white w-fit md:w-auto text-center'>
      POST A JOB
    </p>
  </div>
  
  )
}

export default ImageFoot
