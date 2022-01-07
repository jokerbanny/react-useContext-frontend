const usersReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        success: true,
      }
    case 'GET_USER':
      return {
        user: action.payload.user,
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

export default usersReducer
