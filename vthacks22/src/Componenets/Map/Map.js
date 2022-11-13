import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {Button} from '@mui/material'

const containerStyle = {
    width: '1000px',
    height: '700px'
  };
  
  const center = {
    lat: 41,
    lng: -99
  };
  
  function MyComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAuculb2UY8iTySBcdEDQofpkGgBksbclA"
    })
    const [error, setError] = React.useState(null);
    const [resultLoaded, setResultLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    React.useEffect(() => {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            setResultLoaded(true);
            setItems(result);
            ;
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setResultLoaded(true);
            setError(error);
          }
        )
    }, [])
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (1==2) {
      return <div>Loading...</div>;
    }
      else{
    return isLoaded ? (
        <div class= "main">
        <Button variant="contained">Contained</Button>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4.4}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={{lat: 44, lng:-80}} />
          <></>
        </GoogleMap>
        </div>
    ) : <></>
  }
}
  
  export default React.memo(MyComponent)