import axios from 'axios'
import './Dashboart.scss'
import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useStore } from '@/zustand'
import { IoHome } from 'react-icons/io5'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IoIosStats } from 'react-icons/io'
import {
  IoCard,
  IoBuild,
  IoPerson,
  IoDocumentSharp,
  IoRocket,
  IoLogOutOutline
} from 'react-icons/io5'
import LgDashboard from '../lgDashboard/LgDashboard'

const Dashboard = () => {
  const token = useStore(state => state.token)
  const onLogOut = useStore(state => state.logout)
  useEffect(() => {
    axios
      .get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: token
        }
      })
      .then(res => console.log(res))
      .catch(err => {
        console.log(err)
        onLogOut()
      })
  }, [])
  return (
    <div className='dashboard_collection relative'>
      <div className='sidebar sticky top-0 h-screen'>
        <div className='sidebar_top'>
          <h2 className='logo'>VISION UI FREE</h2>
          <hr />
          <div className='sidebar_item'>
            <div className='sidebar_icon_div'>
              <IoHome className='sidebar_icon' />
            </div>
            <span>Dashboard</span>
          </div>
          <div className='sidebar_item'>
            <div className='sidebar_icon_div'>
              <IoIosStats className='sidebar_icon' />
            </div>
            <span>Tables</span>
          </div>
          <div className='sidebar_item'>
            <div className='sidebar_icon_div'>
              <IoCard className='sidebar_icon' />
            </div>
            <span>Billing</span>
          </div>
          <div className='sidebar_item'>
            <div className='sidebar_icon_div'>
              <IoBuild className='sidebar_icon' />
            </div>
            <span>RTL</span>
          </div>
          <h3>ACCOUNT PAGES</h3>
          <div className='sidebar_item'>
            <div className='sidebar_icon_div'>
              <IoPerson className='sidebar_icon' />
            </div>
            <span>Profile</span>
          </div>
          <div className='sidebar_item'>
            <div className='sidebar_icon_div'>
              <IoDocumentSharp className='sidebar_icon' />
            </div>
            <span>Sign In</span>
          </div>
          <div className='sidebar_item'>
            <div className='sidebar_icon_div'>
              <IoRocket className='sidebar_icon' />
            </div>
            <span>Sign Up</span>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='sidebar_bottom'>
            <div className='question_wrapper'>
              <BsFillQuestionCircleFill className='sidebar_bottom_icon' />
            </div>
            <p className='sidebar_bottom_title'>Need help?</p>
            <p className='sidebar_bottom_desc'>Please check our docs</p>
            <button className='sidebar_btn'>DOCUMENTATION</button>
          </div>
          <NavLink
            onClick={() => onLogOut()}
            className='w-full h-14 rounded-2xl flex items-center gap-4 cursor-pointer'
          >
            <div className='w-[30px] h-[30px] rounded-xl bg-[#0075ff] flex items-center justify-center'>
              <IoLogOutOutline className='text-lg text-white' />
            </div>
            <span className='text-white text-sm'>Log out</span>
          </NavLink>
        </div>
      </div>
      <div className='flex-1 overflow-y-auto lg_dashboard mb-5'>
        <LgDashboard />
      </div>
    </div>
  )
}

export default Dashboard
