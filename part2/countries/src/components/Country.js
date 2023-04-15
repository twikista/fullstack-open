import React from "react";

const Country = ({ name, capital, area, languages, flags, weatherInfo }) => {
  const langCodes = Object.keys(languages);
  const { main, weather, wind } = weatherInfo;
  const icon = weather ? weather[0].icon : null;

  return (
    <>
      <h1>{name.common}</h1>
      <p>{`capital: ${capital}`}</p>
      <p>{`area: ${area}`}</p>
      <br />
      <h4>languages</h4>
      {langCodes.map((i) => (
        <p key={i}>{languages[i]}</p>
      ))}
      <br />
      <img src={flags.png} alt={flags.alt} />
      <br />
      <h2>{`Weather in ${capital}`}</h2>
      <p>{`temperature - ${main?.temp} celcius`}</p>
      <br />
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="wather-icon"
      />
      <p>{`wind - ${wind?.speed} m/s`}</p>
    </>
  );
};

export default Country;
