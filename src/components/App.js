import React, {Component, useState} from "react";
import '../styles/App.css';
import Cityinput from './Cityinput';
import Cityweather from './Cityweather';


function App() {
  const [city, setCity]=React.useState("");
  const [CityWeather,setCityWeather]=React.useState({});
  const fetchCityWeather=()=>
  {
        
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`)
         .then((response)=>response.json()).then((result)=>{
           console.log("Result is",result);
           setCityWeather(result);

           
  });
}
  return (
    <>
    <Cityinput 
    city={city} 
    setCity={setCity}
    fetchCityWeather={fetchCityWeather}
    /> 
    <Cityweather
     CityWeather={CityWeather}

    /> 
 </>
  );
}
export default App;