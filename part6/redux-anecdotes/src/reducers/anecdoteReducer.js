import { createSlice } from '@reduxjs/toolkit'
import anectdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return [...state, action.payload]
    },
    updatedAnecdotes(state, action) {
      const { id } = action.payload
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : action.payload
      )
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { createAnecdote, updatedAnecdotes, setAnecdotes } =
  anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anectdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anectdoteService.createNewAnecdote(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const incrementVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anectdoteService.voteAnecdote(anecdote)
    dispatch(updatedAnecdotes(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer
