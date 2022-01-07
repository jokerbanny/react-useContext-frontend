import { USER_REGISTER, USER_LOGIN } from '../types/typeAction'
import http from '../../constant/axiosApi'

// User Register
export const UserRegister = (user, dispatch) => {
  http
    .post(`/auth/register`, user)
    .then(({ data }) => {
      dispatch({ type: 'SET_LOADING' })
      dispatch({
        type: USER_REGISTER,
        payload: data,
      })
    })
    .catch((error) => {
      dispatch({ type: 'SET_ERROR', payload: error })
    })
}

// User Login
export const userLogin = (user, dispatch) => {
  http
    .post(`/auth/login`, user)
    .then(({ data }) => {
      dispatch({ type: 'SET_LOADING' })
      dispatch({
        type: USER_LOGIN,
        payload: data,
      })
      console.log(data)
    })
    .catch((error) => {
      dispatch({ type: 'SET_ERROR', payload: error })
    })
}
