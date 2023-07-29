import { createContext, useReducer, useContext } from 'react'

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

const notificationContext = createContext()

export const useNotificationContext = () => {
  return useContext(notificationContext)
}

const NotificationContextprovider = ({ children }) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ''
  )

  return (
    <notificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </notificationContext.Provider>
  )
}

export default NotificationContextprovider
