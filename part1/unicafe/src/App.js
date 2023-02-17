import { useState } from "react";

const Button = ({text,onClick})=>{

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine =({text,value})=>{
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad})=>{
  const getAll =()=>good+neutral+bad;

  const getAverage = ()=>good-bad;

  const getPositive = ()=> (good/getAll()*100).toFixed(1)+'%';

  if(getAll()){
    return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={getAll()} />
          <StatisticLine text="average" value={getAverage()} />
          <StatisticLine text="positive" value={getPositive()} />  
        </tbody>
        
      </table>
      

    </div>
    )
  }else{
    return (
      <div>
        No feedback given
      </div>
    )
  }
  
}

const App = ()=>{
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const handleGood = ()=>{
    setGood(good+1);
  }
  const handleNeutral = ()=>{
    setNeutral(neutral+1);
  }
  const handleBad = ()=>{
    setBad(bad+1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;