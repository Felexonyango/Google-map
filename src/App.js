import React,{useState} from 'react'
import {GoogleMap,useLoadScript} from '@react-google-maps/api'
const App =()=>{
 const [myMap,setMyMap]=useState(null)
 const[center,setCenter]=useState({lat:-0.023559 , lng:37.906193})
  const{isLoaded}=useLoadScript({
    googleMapsApiKey:process.env.APP_KEY
  })

 const renderMap=()=>(


  <GoogleMap 
  mapContainerStyle={{
    height:"50vh",
    width:"50vw",
    margin:"20px",
  }}
  zoom={10}
  center={center}
  onLoad={map=>setMyMap(map)}>
  </GoogleMap>

 )
return isLoaded ? renderMap() :null
 
}
export default App