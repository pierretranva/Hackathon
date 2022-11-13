import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';
import {Button} from '@mui/material'

const containerStyle = {
  width: '1000px',
  height: '700px'
};

const center = {
  lat: 41,
    lng: -99
};
async function generateCircles() {
  

  var thing = await fetchData()
  var arr = []
  // var thing2= [Object.keys(thing).forEach((key,index) => {
  //   genOneCircle(thing[key])
  // } )]
  for(let i =0; i<10; i++){
    arr.push(genOneCircle(thing[i]))
    arr.push(genOneCircle2(thing[i]))
  }
  console.log(arr)
  return arr
  // return Object.entries(thing.map(([key, value]) => genOneCircle(value)));
  
  

}
const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
}
const options2 = {
  strokeColor: '#abcdfe',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#0000FF',
  
}
function genOneCircle(value){
  console.log(value)
return <Circle options = {options} center= {{lat: value[0], lng: value[1]}} radius={value[2]*110}/>
// return <div></div>
}

function genOneCircle2(value){
return <Circle options = {options2} center= {{lat: value[0], lng: value[1]}} radius={value[3]*0.00103}/>
// return <div></div>
}

const fetchData = async () => {

  const response = await fetch("http://127.0.0.1:5000/")

  const jsonRes = await response.json()
  // console.log(JSON.stringify(jsonRes))

  return jsonRes

}



function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCLpgWdVjH1BsdSGK0uukAI1gxGgtkefg4"
  })
  const [data, setData] = React.useState(null)
  const [map, setMap] = React.useState(null)
  const [circles, setCircles] = React.useState([])
  const [reloaded, setReloaded] = React.useState(false)
  
  console.log("hellp")


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      map.setZoom()

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  if(!reloaded){

  const genCircles = generateCircles();


  genCircles.then((response) => {
  
    setCircles(response)
    setReloaded(true)
   


  });}
  console.log(circles)
  return isLoaded ? (
    
    <div className= "main">
    {/* <Button variant="contained" onClick={fetchData}></Button> */}
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      onUnmount={onUnmount}
    >

      {circles}
      <></>
    </GoogleMap>

    
    </div>
  ) : <></>
}

export default React.memo(MyComponent)