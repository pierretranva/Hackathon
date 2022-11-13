import * as React from 'react';
import logo from './logo.svg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './App.css';
import {Map, Header, Paragraph} from './Componenets'

function App() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
       <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="CO2 Emissions" />
        <Tab value="two" label="About Us" />
        <Tab value="three" label="Contact Us" />
      </Tabs>
    </Box>
      <header className="App-header">
        <Header/>
        <Paragraph></Paragraph>
      <Map/>
      </header>
    
      
    </div>
  );
}

export default App;
