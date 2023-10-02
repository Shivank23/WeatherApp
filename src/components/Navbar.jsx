import React, { useEffect, useState } from "react";
import "../app.css";
import img1 from "../Assets/cloud.png";

const Navbar = () => {

const[city,setCity]=useState('null')
const [search,setSearch]=useState('Mumbai')
const[wind,setWind]=useState('0')
useEffect(() => {
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=126e247542007b805d4c2241792f11a9`
const fetchapi=async()=>{
const response=await fetch(url)
const data=await response.json();

setCity(data.main)
setWind(data.wind)
console.log(data)
}
fetchapi()
}, [search])

  return (
    <div>
    
    

    
      {/*Nav content start */}
      <div className="container">
      <div className="main">
      
        <div className="nav_content">
          <input type="text" placeholder="Search" onChange={(event)=>{setSearch(event.target.value)}}/>
          <button   >
            <i className="fa-solid fa-magnifying-glass "/>
          </button>
        </div>
        {/*Nav content end */}
{
  !city?<p className="para">No Data Found</p>:(<div>
     {/*Mid content start */}
     <div className="center_content">
          <div className="center_img">
            <img src={img1} alt="img" />
            <h1 className="temp">{city.temp}&deg;C</h1>
            <h2 className="city_name">{search}</h2>
          </div>
        </div>
        {/*Mid content end */}
         {/*Footer content start*/}
<div className="footer">
  <div className="footer_data">
    <div className="humadity">
    <i className="fa-solid fa-droplet fa-2x weather_icon"></i>
    <div>
    <h2 className="weather_heading">{city.humidity}%</h2>
    <h3 className="weather_data">Humadity</h3></div>
    </div>
    <div className="humadity">
    <i className="fa-solid fa-wind fa-2x weather_icon"></i>
    <div>
    <h2 className="weather_heading">{wind.speed}km/h</h2>
    <h3 className="weather_data">Wind</h3>
    </div>
    </div>
  </div>
</div>
  </div>)
}
   
        {/*Footer content end*/}
      </div>
    </div>
    </div>

  
  );
};

export default Navbar;
