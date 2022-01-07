import {
  UserIcon,
  FingerPrintIcon,
  AtSymbolIcon,
  LockClosedIcon,
} from '@heroicons/react/outline/'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import AuthContext from '../../hook/contexts/AuthContext'
import { UserRegister } from '../../hook/actions/AuthAction'
import Spinner from '../../components/shared/backend/Spinner'

const Register = () => {
  const { loading, success, error, dispatch } = useContext(AuthContext)
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirm: '',
  })

  const { fullname, username, email, password, confirm } = user

  const handleOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if(confirm === '' || confirm !== password) {
    //   return
    // }
    UserRegister(user, dispatch)
    setUser({
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirm: '',
    })
  }

  return loading ? (
    <Spinner />
  ) : error ? (
    <h3>Err...</h3>
  ) : success ? (
    <Navigate to='/dashboard' />
  ) : (
    <div className='h-screen md:flex'>
      <div className='relative items-center justify-around hidden w-1/2 overflow-hidden md:flex bg-gradient-to-tr from-blue-800 to-purple-700'>
        <div>
          <h1 className='font-sans text-4xl font-bold text-white'>GoFinance</h1>
          <p className='mt-1 text-white'>
            The most popular peer to peer lending at SEA
          </p>
          <button
            type='submit'
            className='block py-2 mt-4 mb-2 font-bold text-indigo-800 bg-white w-28 rounded-2xl'
          >
            Read More
          </button>
        </div>
        <div className='absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30'></div>
        <div className='absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30'></div>
        <div className='absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30'></div>
        <div className='absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30'></div>
      </div>
      <div className='flex items-center justify-center py-10 bg-white md:w-1/2'>
        <form className='bg-white' onSubmit={handleSubmit}>
          <h1 className='mb-1 text-2xl font-bold text-gray-800'>
            Hello Again!
          </h1>
          <p className='text-sm font-normal text-gray-600 mb-7'>Welcome Back</p>
          <div className='flex items-center px-3 py-2 mb-4 border-2 rounded-md'>
            <UserIcon className='w-5 h-5 text-gray-400' />
            <input
              className='pl-2 border-none outline-none'
              type='text'
              name='fullname'
              placeholder='Full name'
              onChange={handleOnchange}
              value={fullname}
            />
          </div>
          <div className='flex items-center px-3 py-2 mb-4 border-2 rounded-md'>
            <FingerPrintIcon className='w-5 h-5 text-gray-400' />
            <input
              className='pl-2 border-none outline-none'
              type='text'
              name='username'
              placeholder='Username'
              onChange={handleOnchange}
              value={username}
            />
          </div>
          <div className='flex items-center px-3 py-2 mb-4 border-2 rounded-md'>
            <AtSymbolIcon className='w-5 h-5 text-gray-400' />
            <input
              className='pl-2 border-none outline-none'
              type='text'
              name='email'
              placeholder='Email Address'
              onChange={handleOnchange}
              value={email}
            />
          </div>
          <div className='flex items-center px-3 py-2 mb-4 border-2 rounded-md'>
            <LockClosedIcon className='w-5 h-5 text-gray-400' />
            <input
              className='pl-2 border-none outline-none'
              type='text'
              name='password'
              placeholder='Password'
              onChange={handleOnchange}
              value={password}
            />
          </div>
          <div className='flex items-center px-3 py-2 border-2 rounded-md'>
            <LockClosedIcon className='w-5 h-5 text-gray-400' />
            <input
              className='pl-2 border-none outline-none'
              type='text'
              name='confirm'
              placeholder='Confirm'
              onChange={handleOnchange}
              value={confirm}
            />
          </div>
          <button
            type='submit'
            className='block w-full py-2 mt-4 mb-2 font-semibold text-white rounded-md bg-gradient-to-tr from-blue-500 to-purple-500'
          >
            Register
          </button>
          <span className='ml-2 text-sm cursor-pointer hover:text-blue-500'>
            You have a account ?
          </span>
        </form>
      </div>
    </div>
  )
}

export default Register
