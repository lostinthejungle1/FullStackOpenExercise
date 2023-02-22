import axios from "axios"
import { useEffect, useState } from "react"
import Country from "./Country"
const Display = ({data})=>{

    const getLanguages = (country)=>{
        const languages = []
        // console.log('languages',country.languages)
        for(const key in country.languages){
        languages.push(country.languages[key])
        }
        console.log('languages',languages)
        return languages.map(l=><li key={l}>{l}</li>)
    }

    const[weatherData,setWeatherData]=useState(null)
   
    if(data===null){
        return <div>No result</div>
    }
    if(data.length>10){
        return <div>Too many matches, specify another filter</div>
    }else if(data.length>1){
        return (
            <div>
                {data.map(c=><Country key={c.cca2} country={c}/>)}
            </div>
        )
    }else if(data.length===1){
        const country = data[0];
        // I should not hard code the api key here, instead I should use the environment variable
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[0]}&appid=983a9a4759c45d8befc1582ffbcff8a2`)
        .then(res=>res.data).then(data=>{
            console.log(data,'weather')
            setWeatherData(data);
        }).catch(err=>{
            console.log(err);
            return <div>server error</div>
        })

        return (
            <div>
                <h2>{country.name.official}</h2>
                <p>capital {country.capital?country.capital[0]:'N/A'}</p>
                <p>area {country.area}</p>
                <h3>languages</h3>
                <ul>
                    {getLanguages(country)}
                </ul>
                <div style={{fontSize:100}}>{country.flag}</div>
                <h3>Weather in {country.capital?country.capital:country.name.official}</h3>
                <p>temparature { weatherData?weatherData.main.temp- 273.15:'N/A'} Celcius</p>
                <p>wind {weatherData?weatherData.wind.speed+'m/s':'N/A'}</p>
            </div>
        )
    }else{
        return <div>No matches at all</div>
    }
}

export default Display;