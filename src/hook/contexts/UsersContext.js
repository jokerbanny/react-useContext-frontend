import { createContext, useReducer } from 'react'
import usersReducer from '../reducers/UsersReducer'

const UsersContext = createContext()

export const UsersContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    error: false,
    success: false,
  }
  const [state, dispatch] = useReducer(usersReducer, initialState)
  return (
    <UsersContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContext
