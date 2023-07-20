import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../services.js/anecdoteService'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdotes) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      console.log(anecdotes)
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdotes))
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
