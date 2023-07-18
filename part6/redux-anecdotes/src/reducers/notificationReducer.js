import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    updateNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return initialState
    },
    clearNotification(state, action) {
      return initialState
    },
  },
})

export const { updateNotification, clearNotification, removeNotification } =
  notificationSlice.actions
export const setNotification = (notificationText, delayTime) => {
  return (dispatch) => {
    dispatch(updateNotification(notificationText))
    setTimeout(() => dispatch(clearNotification()), 1000 * delayTime)
  }
}

export default notificationSlice.reducer
