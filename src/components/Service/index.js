import React from 'react';
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./index.css"
const Service = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return <div className="layout_service">

<Tabs
        value={value}
        onChange={handleChange}
        textColor="dark"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab style={{fontSize: "15px", textTransform: "capitalize"}}  label="Financial" />
        <Tab style={{fontSize: "15px", marginLeft: "13px", textTransform: "capitalize"}}  label="Client" />
       
      </Tabs>
    </div>
};

export default Service;
