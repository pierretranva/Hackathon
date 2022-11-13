import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useRef} from 'react';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
  const ref = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  
  return (
    <Box sx={{ width: '100%' }}>
      
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab onClick={handleClick} value="one" label="CO2 Emissions" />
        <Tab onClick={handleClick} value="two" label="About Us" />
        <Tab onClick={handleClick} value="three" label="Contact Us" />
        <div className='idk' id="id"> HEL</div>
      </Tabs>
    </Box>

    
  );
}



