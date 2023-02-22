import { useState } from "react";

const getLanguages = (country)=>{
    const languages = []
    // console.log('languages',country.languages)
    for(const key in country.languages){
    languages.push(country.languages[key])
    }
    console.log('languages',languages)
    return languages.map(l=><li key={l}>{l}</li>)
}
const Country = ({country})=>{
    const handleShow =()=>{
        setShow(!show)
    }
    const [show,setShow]=useState(false)
    return (
        <div>
            <div>{country.name.official} <button onClick={handleShow}>{show?"don't show":'show'}</button></div>
            {show?
            (<div>
                <h2>{country.name.official}</h2>
                <p>capital {country.capital?country.capital[0]:'N/A'}</p>
                <p>area {country.area}</p>
                <h3>languages</h3>
                <ul>
                    {getLanguages(country)}
                </ul>
                <div style={{fontSize:100}}>{country.flag}</div>
            </div>)
            :(<div></div>)}
        </div>
        
    )
}

export default Country;