import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '@/components/Home'

const Layout = () => {
  return (
    <>
    <Home/>
    <main>
        <Outlet/>
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default Layout