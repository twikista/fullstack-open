const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'VOTE_INCREMENTED':
      return action.payload

    case 'ANECDOTE_ADDED':
      return action.payload

    case 'CLEAR_NOTIFICATION':
      return ''

    case 'ERROR':
      return action.payload

    default:
      return state
  }
}

export default notificationReducer
