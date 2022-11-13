import * as React from 'react';
import logo from './logo.svg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './App.css';
import {Map, Header, Paragraph} from './Componenets'
import {useRef} from 'react';

function App() {
  const [value, setValue] = React.useState('one');
  const ref = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App2">
       <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab href="#ribbit" value="one" label="CO2 Emissions" />
        <Tab href="#meow" value="two" label="About Us" />
        <Tab href="#bark" value="three" label="Developers" />
      </Tabs>

    </Box>

      <header className="App-header">
      <div className='emi'> <p className="ribbit"> CO2 Emission</p></div>
      <Map/>
      <div className= 'Legend'>
        <p1> Red is carbon emission density (CO2 emissions/km^2) </p1>
        <body> Blue is Total carbon emission per cluster (CO2) </body>
      </div>
      <div className='cont'> 
      <p1 id="bark"> Developers </p1>
      <body>
        Junhyung Koo, Pierre Tran, Gawain Zhang, Alex Owens, Abhi Gautam 
      </body>
      </div>
      </header>
    </div>
  );
}

export default App;
