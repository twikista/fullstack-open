import { useState } from "react";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good + 0 - bad) / total;
  const positive = (good / total) * 100;

  console.log(good, neutral, bad);

  const increaseGood = () => {
    setGood((good) => good + 1);
  };

  const increaseNeutral = () => {
    setNeutral((neutral) => neutral + 1);
  };

  const increaseBad = () => {
    setBad((bad) => bad + 1);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive + "%"}</p>
    </div>
  );
};

export default App;
