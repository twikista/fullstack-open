import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notification } from '../util/util'

const AnecdoteList = () => {
  const { anecdotes, filter } = useSelector((state) => state)
  console.log(anecdotes)
  const dispatch = useDispatch()
  const vote = (id, content) => {
    dispatch(voteAnecdote(id))
    notification(dispatch, content)
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
                  vote(anecdote.id, `you voted ${anecdote.content}`)
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
