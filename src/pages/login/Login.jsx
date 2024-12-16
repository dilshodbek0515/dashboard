import { useStore } from '@/zustand'
import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const onLogin = useStore(state => state.login)
  const navigate = useNavigate()
  const handleLogin = e => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData)

    axios
      .post('https://dummyjson.com/auth/login', user)
      .then(res => {
        toast.success('Successfull')
        onLogin(res.data.accessToken)
        navigate('/dashboard')
      })
      .catch(err => {
        toast.error("Tug'ri login parol kiriting !")
      })
      .finally(() => setLoading(false))
  }
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <form
        action=''
        onSubmit={handleLogin}
        className='flex items-center justify-center w-[500px] h-[400px] flex-col shadow-2xl rounded-xl bg-slate-300 gap-8 p-5'
      >
        <div>
          <p className='text-xl text-black'>Username: emilys</p>
          <p className='text-xl text-black'>Password: emilyspass</p>
        </div>
        <input
          type='text'
          name='username'
          placeholder='Enter your username'
          required
          className='border-transparent w-full h-14 rounded-lg outline-none px-5 text-lg text-slate-400 bg-slate-50'
        />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          required
          className='border-transparent w-full h-14 rounded-lg outline-none px-5 text-lg text-slate-400 bg-slate-50'
        />
        <button
          disabled={loading}
          className='w-full h-14 rounded-xl px-5 text-lg border text-white duration-300 bg-blue-500 hover:bg-transparent hover:text-blue-500 hover: border-blue-500 hover:duration-300'
        >
          {loading ? 'Loading...' : 'Log in'}
        </button>
      </form>

      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Login
