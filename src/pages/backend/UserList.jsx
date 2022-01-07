import { useContext } from 'react'
import BackendLayout from '../../components/layouts/backend/BackendLayout'
import UsersContext from '../../hook/contexts/UsersContext'
import { MenuAlt1Icon, BellIcon } from '@heroicons/react/outline/'
import { getUsers } from '../../hook/actions/UserAction'
import { useEffect } from 'react'

import Spinner from '../../components/shared/backend/Spinner'

const UserList = () => {
  const { users, loading, error, success, dispatch } = useContext(UsersContext)

  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch])

  return (
    <BackendLayout>
      <div className='min-h-screen bg-gray-50'>
        <nav className='lg:hidden'>
          <div className='flex items-center justify-between p-4 bg-white'>
            <div className='flex items-center'>
              <MenuAlt1Icon className='hidden w-5 h-5' />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <div className='flex items-center space-x-2'>
              <BellIcon className='cursor-pointer h-7 w-7' />
              <div className='w-10'>
                <img
                  className='rounded-full'
                  src='https://forbesthailand.com/wp-content/uploads/2021/08/https-specials-images.forbesimg.com-imageserve-5f47d4de7637290765bce495-0x0.jpgbackground000000cropX11699cropX23845cropY1559cropY22704.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className='p-4'>
            <div className='p-4 bg-white rounded-md'>
              <div>
                <h2 className='mb-4 text-xl font-bold text-gray-700'>
                  Admin & User
                </h2>
                <div>
                  <div>
                    <div className='flex justify-between px-4 py-2 font-bold text-white rounded-md bg-gradient-to-tr from-indigo-600 to-purple-600 text-md'>
                      <div>
                        <span>Name</span>
                      </div>
                      <div>
                        <span>Email</span>
                      </div>
                      <div>
                        <span>Role</span>
                      </div>
                      <div>
                        <span>Time</span>
                      </div>
                      <div>
                        <span>Edit</span>
                      </div>
                    </div>
                    {loading ? (
                      <Spinner />
                    ) : error ? (
                      <h2>Error...</h2>
                    ) : success ? (
                      <div>
                        {users.map((user) => (
                          <div
                            className='flex justify-between mt-4 space-x-4 text-sm font-normal border-t'
                            key={user._id}
                          >
                            <div className='flex px-2'>
                              <span>{user.username}</span>
                            </div>
                            <div>
                              <span>{user.email}</span>
                            </div>
                            <div className='px-2'>
                              <span>{user.role}</span>
                            </div>
                            <div className='px-2'>
                              <span>{user.updatedAt}</span>
                            </div>
                            <div className='px-2'>
                              <select>
                                <option>{user.role}</option>
                                <option>User</option>
                              </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackendLayout>
  )
}

export default UserList
