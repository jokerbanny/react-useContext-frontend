import SideBarAdmin from '../../shared/backend/SideBarAdmin'

const BackendLayout = ({ children }) => {
  return (
    <div className='flex'>
      <SideBarAdmin />
      <main className='w-full'>
        <div>{children}</div>
      </main>
    </div>
  )
}

export default BackendLayout
