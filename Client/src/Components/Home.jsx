import React from 'react'
import Navbar from './Navbar'
import task from '../assets/images/Add tasks-bro.png'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-white via-pink-300 to-blue-200'>
       <div>
         <Navbar />
       </div>
       <div className='h-screen flex justify-between m-2 items-center '>
          <div>
            <img src={task} alt="img" srcset="" className='w-[2000px] h-[300px]' />
          </div>
          <div>
            <h1 className='text-2xl font-title text-violet-900 mt-8 ml-8'>Operations keeps the lights on, strategy provides a light at the end of the tunnel, but project management is the train engine that moves the organization forward...</h1>
          </div>
       </div>
    </div>
  )
}

export default Home