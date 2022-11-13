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
function generateCricles(emissionsData) {
  return Object.entries(emissionsData).map(([key, value]) => genOneCircle(value));

}
function genOneCircle(value){
return <Circle center= {{lat: value[0], lng: value[1]}} radius={value[2]}/>
}
   
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAuculb2UY8iTySBcdEDQofpkGgBksbclA"
  })
  const [data, setData] = React.useState(null)
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/get")
    const jsonRes = await response.json()

    setData(JSON.stringify(jsonRes))
  }

  return isLoaded ? (
    
    <div className= "main">
    <Button variant="contained" onClick={fetchData}>{data}</Button>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4.4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker center={{lat: 44, lng:-80}} title="urbad" />
      <Circle center={{lat: 30, lng: -110}} radius={1000}/> 
      <></>
    </GoogleMap>
    
    
    </div>
  ) : <></>
}

export default React.memo(MyComponent)