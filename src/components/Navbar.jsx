import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:text-indigo-300 hover:scale-105 transition-all duration-300'>Home</li>
        <li className='cursor-pointer hover:text-indigo-300 hover:scale-105 trasnition-all duration-300'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar