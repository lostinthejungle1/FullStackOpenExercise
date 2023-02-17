import { useState } from "react";

const App =()=>{
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected,setSelected] = useState(0);
  const [voteArr,setVoteArr]=useState(Array(8).fill(0))

  const handleGetRandom =()=>{
    const amount = anecdotes.length;
    const randomIndex = Math.floor(Math.random()*amount);
    setSelected(randomIndex);
  }

  const handleVote = ()=>{
    const copy = [...voteArr];
    copy[selected]++;
    setVoteArr(copy);
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {voteArr[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleGetRandom}>get random anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[voteArr.indexOf(Math.max(...voteArr))]}</p>
    </div>
  )
}

export default App;