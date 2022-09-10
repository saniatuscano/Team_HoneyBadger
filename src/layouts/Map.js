import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {DisplayMap} from '../layouts/DisplayMap';
const API_KEY = 'TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0'
const Maps = () => {

    const [data,setData] = useState(null)
    // const maps = async() => {
    //     const res = await axios.get(`https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${API_KEY}&lat=52.518752&lon=13.402277&vt=0&z=14`);
    //     console.log(`https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${API_KEY}&lat=52.518752&lon=13.402277&vt=0&z=14`)
    //     setData(res.data)
    // }
    // useEffect(()=>{
        
    //     maps();
    //     console.log("data", data)
    // },[])
  return (
    <DisplayMap />
  )
}

export default Maps