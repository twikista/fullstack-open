import { useDispatch } from 'react-redux'
import { createAnecdote, getId } from '../reducers/anecdoteReducer'
import { notification } from '../util/util'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(
      createAnecdote({
        content: anecdote,
        id: getId(),
        votes: 0,
      })
    )

    notification(dispatch, `you added ${anecdote}`)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'> create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
