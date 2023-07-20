import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAll, incrementVote } from './services.js/anecdoteService'

const App = () => {
  const queryClient = useQueryClient()

  const {
    data: anecdotes,
    isLoading,
    isError,
  } = useQuery('anecdotes', getAll, {
    retry: 1,
  })

  const mutation = useMutation(incrementVote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      const updatedAnecdotes = anecdotes.map((i) =>
        i.id !== newAnecdote.id ? i : newAnecdote
      )
      queryClient.setQueryData('anecdotes', updatedAnecdotes)
    },
  })

  const handleVote = (anecdote) => {
    mutation.mutate(anecdote)
  }

  if (isLoading) {
    return <div>is loading</div>
  }

  if (isError) {
    return <div>Anecdotes service is not available due to server error</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
