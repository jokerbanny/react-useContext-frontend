import { CubeIcon } from '@heroicons/react/outline/'
const NavbarFront = () => {
  return (
    <div>
      <nav>
        <div className='flex items-center justify-between px-6 py-4 bg-gradient-to-tr from-indigo-600 to-purple-600'>
          <div className='flex items-center space-x-2'>
            <CubeIcon className='w-10 h-10 text-white' />
            <h1 className='text-2xl font-bold text-white cursor-pointer'>
              Contact Keeper
            </h1>
          </div>
          <div className='flex items-center space-x-6'>
            <span className='text-lg font-semibold text-white cursor-pointer'>
              Home
            </span>
            <span className='text-lg font-semibold text-white cursor-pointer'>
              About
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarFront
