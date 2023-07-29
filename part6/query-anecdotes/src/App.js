import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAll, incrementVote } from './services.js/anecdoteService'
import AnecdotesList from './components/AnecdotesList'
import { useNotificationContext } from './components/NotificationContext'

const App = () => {
  const queryClient = useQueryClient()
  const [, notificationDispatch] = useNotificationContext()

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
      notificationDispatch({
        type: 'VOTE_INCREMENTED',
        payload: `anecdote '${newAnecdote.content}' voted`,
      })
      setTimeout(
        () => notificationDispatch({ type: 'CLEAR_NOTIFICATION' }),
        5 * 1000
      )
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
      <AnecdotesList anecdotes={anecdotes} handleVote={handleVote} />
    </div>
  )
}

export default App
