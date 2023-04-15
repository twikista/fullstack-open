import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [countriesToShow, setCountriesToShow] = useState([]);
  console.log(allCountries);
  console.log(countriesToShow);

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  useEffect(() => {
    setCountriesToShow(
      allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, allCountries]);
  return (
    <div className="App">
      <label>find countries</label>
      <input type="search" value={query} onChange={queryHandler} />
      <Countries countries={countriesToShow} setCountry={setCountriesToShow} />
    </div>
  );
}

export default App;
