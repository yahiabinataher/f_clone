import React from 'react'
import Sidber from './Sidber'
import PostBox from './PostBox'
import Rightber from './Rightber'

const Hero = () => {
  return (
    <>
    <div className=" w-screen px-4">
     {/* main part */}
     <div className='flex justify-between  '>
      {/* sidbar */}
       <div className='w-1/4'>
           <Sidber/>
        </div>
       <div className='w-2/4 -z-[2000]' >
           <PostBox/>
        </div>
        <div className='w-1/4'>
            <Rightber/>
        </div>
     </div>
    </div>
    </>
  )
}

export default Hero