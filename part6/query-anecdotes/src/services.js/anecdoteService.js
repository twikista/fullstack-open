import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}
