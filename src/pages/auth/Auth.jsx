import { useStore } from '@/zustand'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const token = useStore(state => state.token)
    
  return token ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default Auth