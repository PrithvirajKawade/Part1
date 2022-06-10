import { useState } from "react";
import Anecdotes from "./Components/Anecdotes";
import Votes from "./Components/Votes";
import WinningAnecdote from "./Components/WinningAnecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    // "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const randomSentence = () => {
    const randomElement = Math.floor(Math.random(selected) * anecdotes.length);
    console.log(randomElement);
    setSelected(randomElement);
  };
  const handleVotes = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
    console.log(votesCopy);
    console.log(votes[selected]);
  };

  const highestVotes = Math.max(...votes);
  const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];
  return (
    <div>
      <Anecdotes anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <button onClick={randomSentence}>next anecdote</button>
      <button onClick={handleVotes}>Vote</button>
      <WinningAnecdote
        winningAnecdote={winningAnecdote}
        highestVotes={highestVotes}
      />
    </div>
  );
};

export default App;
