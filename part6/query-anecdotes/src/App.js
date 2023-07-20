import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from 'react-query'
import { getAll } from './services.js/anecdoteService'

const App = () => {
  const {
    data: anecdotes,
    isLoading,
    isError,
  } = useQuery('anecdotes', getAll, {
    retry: 1,
  })

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  if (isLoading) {
    return <div>is loading</div>
  }

  if (isError) {
    return <div>Anecdotes service is not available due to server error</div>
  }

  // const anecdotes = result?.data
  // console.log(anecdotes)

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
