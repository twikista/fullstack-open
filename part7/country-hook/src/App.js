import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')

  return {
    props: { type, value, onChange },
    value,
    reset,
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name) {
      const fetchCountry = async () => {
        try {
          const baseURL = `https://studies.cs.helsinki.fi/restcountries`
          const response = await axios.get(`${baseURL}/api/name/${name}`)
          setCountry(response.data)
        } catch (error) {
          setCountry({ error: `country ${name} not found!` })
        }
      }
      fetchCountry()
    } else {
      setCountry(null)
    }
  }, [name])

  return country
}

const Country = ({ country }) => {
  if (!country) {
    return null
  }

  if (country.error) {
    return <div>{country.error}</div>
  }

  return (
    <div>
      <h3>{country.name.common} </h3>
      <div>capital {country.capital[0]} </div>
      <div>population {country.population}</div>
      <img
        src={country.flags.png}
        alt={`flag of ${country.flags.alt}`}
        style={{ height: '60px', width: '80px' }}
      />
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const clearfield = () => {
    nameInput.reset()
  }

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    clearfield()
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput.props} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
