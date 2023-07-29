import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../services.js/anecdoteService'
import { useNotificationContext } from './NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const [, notificationDispatch] = useNotificationContext()

  const mutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      console.log(anecdotes)
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
      notificationDispatch({
        type: 'ANECDOTE_ADDED',
        payload: `You added ${newAnecdote.content}`,
      })
      setTimeout(
        () => notificationDispatch({ type: 'CLEAR_NOTIFICATION' }),
        5 * 1000
      )
    },
    onError: (err) => {
      notificationDispatch({
        type: 'ANECDOTE_ADDED',
        payload: 'anecdote too short, must have length 5 or more',
      })
      setTimeout(
        () => notificationDispatch({ type: 'CLEAR_NOTIFICATION' }),
        5 * 1000
      )
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    mutation.mutate(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
