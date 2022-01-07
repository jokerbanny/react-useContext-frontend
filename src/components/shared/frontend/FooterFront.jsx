const FooterFront = () => {
  return (
    <footer className='flex justify-between w-full px-20 py-10 h-50 bg-indigo-50'>
      <div className='w-2/3'>
        <h1 className='inline-block p-4 mb-4 text-2xl font-bold text-gray-700 bg-white rounded-md'>
          Ready to get started?
        </h1>
        <p className='w-2/3 font-semibold text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, br sed do
          eiusmod tempor incididunt.
        </p>
        <button className='block px-4 py-2 mt-4 tracking-wide text-white bg-indigo-600 rounded-md'>
          Get started
        </button>
      </div>
      <div className='flex items-center justify-center w-1/3'>
        <div>
          <p className='transition duration-100 cursor-pointer hover:text-indigo-600 font'>
            Navigation
          </p>
          <p className='transition duration-100 cursor-pointer hover:text-indigo-600 font'>
            Email Marketing
          </p>
          <p className='transition duration-100 cursor-pointer hover:text-indigo-600 font'>
            Campaigns
          </p>
          <p className='transition duration-100 cursor-pointer hover:text-indigo-600 font'>
            Branding
          </p>
          <p className='transition duration-100 cursor-pointer hover:text-indigo-600 font'>
            Offline
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterFront
