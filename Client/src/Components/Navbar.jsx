import React from 'react'
import { Link } from 'react-router-dom'
import Materialicon from 'material-icons-react'
import logo from '../assets/images/LOGO.png'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center p-2 bg-slate-200 text-xl font-title shadow-lg'>
        <div>
          <img src={logo} alt="" className='w-10 h-10'/>
        </div>
        <div className='flex gap-2 font-bold font-title text-2xl ml-8'>
            <h1 className='text-yellow-500'>TASK</h1> 
            <span><h1 className='text-violet-900'>MANAGER</h1></span>
        </div>
        <div className='flex relative items-center gap-4'>
          <Link to="/SignUp"><Materialicon icon="person" color='black' size={24} /></Link>
          <Link to="/Login"><Materialicon icon="login" color='black' size={24} /></Link>
        </div>
    </div>
  )
}

export default Navbar