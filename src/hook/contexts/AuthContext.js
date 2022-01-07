import { createContext, useReducer } from 'react'
import authReducer from '../reducers/AuthReducer'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    error: false,
    success: false,
  }
  const [state, dispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
