import { useDispatch } from 'react-redux'
import { anecdotesFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    console.log(event.target.value)
    dispatch(anecdotesFilter(event.target.value))
  }
  return (
    <div style={{ marginBottom: '10px' }}>
      filer <input name='filter' onChange={handleChange} />
    </div>
  )
}

export default Filter
