const WinningAnecdote = ({ winningAnecdote, highestVotes }) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{winningAnecdote}</p>
      <p>has {highestVotes} votes</p>
    </div>
  );
};

export default WinningAnecdote;
