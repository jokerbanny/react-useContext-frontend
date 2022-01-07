import { AuthContextProvider } from './contexts/AuthContext'
import { UsersContextProvider } from './contexts/UsersContext'
const RouteProvider = ({ children }) => {
  return (
    <UsersContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </UsersContextProvider>
  )
}

export default RouteProvider
