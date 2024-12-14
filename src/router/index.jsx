import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Dashboard from '@/pages/dashboard/Dashboard'
import Login from '@/pages/login/Login'
import Auth from '@/pages/auth/Auth'
import LgDashboard from '@/pages/lgDashboard/LgDashboard'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/' element={<Auth />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Router
