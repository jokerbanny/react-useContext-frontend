import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../types/typeAction'
import http from '../../constant/axiosApi'

// User Register
export const getUsers = (dispatch) => {
  http
    .get(`/users`)
    .then(({ data }) => {
      dispatch({ type: 'SET_LOADING' })
      dispatch({
        type: 'GET_USERS',
        payload: data.data,
      })
    })
    .catch((error) => {
      dispatch({ type: 'SET_ERROR', payload: error })
    })
}
