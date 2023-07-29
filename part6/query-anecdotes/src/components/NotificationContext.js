import { createContext, useReducer, useContext } from 'react'
import notificationReducer from '../reducers/notificationReducer'

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
