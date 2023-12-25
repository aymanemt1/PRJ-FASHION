import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ProdDescription } from './ProdDescription';
import { ProdReviews } from './ProdReviews';
import { ThemeContext } from '../../Context/ThemeContext';

export default function ProductInfo() {
  const { modeColor, modeBackground } = useContext(ThemeContext);
  const styleDark = modeBackground === 'darkBackground' ? { backgroundColor: "rgb(34, 43, 69)" } : { backgroundColor: "#f0f0f0" };

  const [value, setValue] = useState('one');
  const [Content, setContent] = useState(<ProdDescription />);

  const handleChange = (event, newValue) => {
    if (newValue === 'one') {
      setContent(<ProdDescription />);
      setValue(newValue);
    } else if (newValue === 'two') {
      setContent(<ProdReviews />);
      setValue(newValue);
    }
  };

  return (
    <div >
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor={modeColor}
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Description" />
          <Tab value="two" label="Reviews" />
        </Tabs>
      </Box>
      <div style={{ padding: '20px', borderRadius: '8px', margin: '20px 0px 80px 0px', ...styleDark }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
          {Content}
        </p>
      </div>
    </div>
  );
}
