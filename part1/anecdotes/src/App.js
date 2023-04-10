import { useState } from "react";

const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler}>{text}</button>
);

const Header = ({ text }) => <h2>{text}</h2>;

const Anecdotes = ({ text, votesCount }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votesCount} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votesCount, setVotesCount] = useState(Array(anecdotes.length).fill(0));
  console.log(votesCount);
  //generate random number
  const randonNumber = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));

  //up vote an anecdote
  const vote = () => {
    const votesCountCopy = [...votesCount];
    votesCountCopy[selected] += 1;
    setVotesCount(votesCountCopy);
  };

  //determin anecdotes with highest vote count
  const maxVoteValue = () => votesCount.indexOf(Math.max(...votesCount));

  return (
    <div>
      <Header text="Anecdotes of the day" />
      <Anecdotes text={anecdotes[selected]} votesCount={votesCount[selected]} />
      <Button clickHandler={vote} text="vote" />
      <Button clickHandler={randonNumber} text="next anectode" />

      <Header text="Anecdotes with most votes" />
      <Anecdotes
        text={anecdotes[maxVoteValue()]}
        votesCount={votesCount[maxVoteValue()]}
      />
    </div>
  );
};

export default App;
