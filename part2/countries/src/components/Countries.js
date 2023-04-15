import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./Country";

const Countries = ({ countries, setCountry }) => {
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    if (countries.length === 1) {
      const [
        {
          latlng: [latitude, longitude],
        },
      ] = countries;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        )
        .then((response) => setWeatherInfo(response.data));
    }
  }, [countries]);

  if (countries.length === 1) {
    return countries.map((i) => (
      <Country key={i.name.commom} {...i} weatherInfo={weatherInfo} />
    ));
  }

  if (countries.length <= 10) {
    return countries.map((i) => (
      <p key={i.name.common}>
        {i.name.common}
        <button onClick={() => setCountry([i])}>show</button>
      </p>
    ));
  }

  if (countries.length > 10) {
    return <p>Too many countries, specify another filter</p>;
  }
};

export default Countries;
