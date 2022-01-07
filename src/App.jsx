import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/backend/Dashboard'
import UserList from './pages/backend/UserList'
import Home from './pages/frontend/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route exact path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/userlist' element={<UserList />} />
    </Routes>
  )
}

export default App
