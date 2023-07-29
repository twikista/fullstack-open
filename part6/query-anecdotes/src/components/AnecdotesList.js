const AnecdotesList = ({ anecdotes, handleVote }) => {
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>has {anecdote.votes}</div>
          <button onClick={() => handleVote(anecdote)}>vote</button>
        </div>
      ))}
    </div>
  )
}

export default AnecdotesList
