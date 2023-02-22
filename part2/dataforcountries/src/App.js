import { useState,useEffect } from "react";
import axios from 'axios';
import Display from './components/Display'

const App = ()=>{

  const [value,setValue] = useState('');
  const [result,setResult] = useState([]);
  useEffect(()=>{

    if(value){
      axios.get('https://restcountries.com/v3.1/name/'+value).then(res=>res.data).then(data=>{
        console.log(data);
        setResult(data);
      }).catch(err=>{
        setResult(null)
      })
    }else{
      setResult(null)
    }
  },[value])
  const handleChange = e=>{
    setValue(e.target.value);
  }
  return (
    <div>
      <form>
        <label>find countries <input value={value} type='text' onChange={handleChange} /></label>
      </form>
      <Display data={result} />
      </div>
  )
}

export default App;