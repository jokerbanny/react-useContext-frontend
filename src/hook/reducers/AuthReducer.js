import { USER_REGISTER, USER_LOGIN } from '../types/typeAction'

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_REGISTER:
    case USER_LOGIN:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        loading: false,
        success: true,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
