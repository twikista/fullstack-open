import reducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdote reducer', () => {
  const initialState = [
    {
      content: 'Big things come in small packages',
      id: 1234,
      votes: 0,
    },
  ]
  test('vote is incremented', () => {
    const action = { type: 'VOTE', payload: 1234 }
    const state = initialState
    deepFreeze(state)

    const newState = reducer(state, action)
    expect(newState).toContainEqual({
      content: 'Big things come in small packages',
      id: 1234,
      votes: 1,
    })
  })

  test('new anecdote is added to state', () => {
    const newAnecdote = {
      content: 'Its never too to start',
      id: 1235,
      votes: 0,
    }
    const action = {
      type: 'NEW ANECDOTE',
      payload: newAnecdote,
    }
    const state = initialState
    deepFreeze(state)

    const newState = reducer(state, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(newAnecdote)
  })
})
