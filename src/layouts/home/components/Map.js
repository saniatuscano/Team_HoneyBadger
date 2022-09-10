import React,{useEffect, useState} from 'react';
import axios from 'axios';
// import { DisplayMapClass } from './DisplayMapClass';
import PageLayout from 'examples/LayoutContainers/PageLayout';
// import HPlatform, { HMap, HMarker } from 'react-here-map';
const API_KEY = 'TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0'


const Map = () => {
  const [address,setAddress] = useState('')


const handlesubmit = async (e) => {
  e.preventDefault()
  const res = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${API_KEY}`)
  console.log(res.data.items)
}
  
  return (
   <PageLayout>
   <form onSubmit={handlesubmit}>
    <label htmlFor="input">Enter address</label>
    <input 
    type="text" 
    onChange={e => setAddress(e.target.value)}
    />
      <button type="submit">Submit</button>
      </form>
      
                {/* <HPlatform
      app_id="AjGVWUJ1HgjOwGVkkLCw"
      app_code="TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0-dWuetlWw"
      useCIT
      useHTTPS
      includePlace
    >
      <HMap
        style={{
          height: '400px',
          width: '100%'
        }}
        mapOptions={{ center: { lat: 52.5321472, lng: 13.3935785 } }}
      >
        <HMarker lat={10.998666} lng={-63.79841} />
      </HMap>
    </HPlatform> */}
    
   </PageLayout>
  )
}

export default Map