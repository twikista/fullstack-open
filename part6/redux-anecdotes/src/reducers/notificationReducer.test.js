import deepFreeze from 'deep-freeze'
import notificationReducer from './notificationReducer'

describe('notification reducer', () => {
  test('return new state with action notications/showNotification', () => {
    const initialState = ''
    const action = {
      type: 'notifications/showNotification',
      payload: 'you never how much you can until you start',
    }
    const state = initialState
    deepFreeze(state)

    const newState = notificationReducer(state, action)
    expect(newState).toBe('you never how much you can until you start')
  })

  test('return new state with action notications/hideNotification', () => {
    const initialState = 'you never how much you can until you start'
    const action = {
      type: 'notifications/hideNotification',
    }
    const state = initialState
    deepFreeze(state)
    const newState = notificationReducer(state, action)

    expect(newState).toBe('')
  })
})
