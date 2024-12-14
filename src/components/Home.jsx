import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-10'>
      <h2 className='text-3xl text-gray-500'>Ro'yxatdan o'ting</h2>
      <NavLink
        to={'/login'}
        className='w-96 h-14 flex items-center justify-center bg-gray-700 text-xl text-white rounded-lg duration-300 hover:opacity-50 hover:'
      >
        Login
      </NavLink>
    </div>
  )
}

export default Home
