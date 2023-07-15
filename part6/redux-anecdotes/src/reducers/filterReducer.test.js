import deepFreeze from 'deep-freeze'
import filterReducer from './filterReducer'

describe('filter reducer', () => {
  test('filters can be added', () => {
    const action = {
      type: 'SET_FILTER',
      payload: 'code',
    }
    const state = ''
    deepFreeze(state)

    const newState = filterReducer(state, action)

    expect(newState).toBe('code')
  })
})
