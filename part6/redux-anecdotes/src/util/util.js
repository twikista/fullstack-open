import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer'

export const notification = (dispatch, payload) => {
  dispatch(setNotification(payload))
  const timeout = setTimeout(() => {
    dispatch(removeNotification())
    clearTimeout(timeout)
  }, 5000)
}
