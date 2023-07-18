import { useSelector, useDispatch } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const { anecdotes, filter } = useSelector((state) => state)
  console.log(anecdotes)
  const dispatch = useDispatch()
  const voteAnecdote = (anecdote) => {
    dispatch(incrementVote(anecdote))
    dispatch(setNotification(`you voted ${anecdote.content}`, 5))
  }
  return (
    <>
      {anecdotes
        .filter((i) => i.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() =>
                  voteAnecdote(anecdote, `you voted ${anecdote.content}`)
                }
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </>
  )
}

export default AnecdoteList
