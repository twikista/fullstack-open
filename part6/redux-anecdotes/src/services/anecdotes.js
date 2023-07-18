import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'
const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const createNewAnecdote = async (content) => {
  const object = { content, views: 0 }
  const response = await axios.post(baseURL, object)
  return response.data
}
export default { getAll, createNewAnecdote }
