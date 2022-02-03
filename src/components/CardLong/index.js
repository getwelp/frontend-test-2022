import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./index.css"
const CardLong = () => {
  return <div>
      <div className="cardLong">
          <div className="icon">
         <ArrowUpwardIcon style={{color: "green"}}/>
          </div>
      <div className="cardLong__text">
      <Typography style={{marginBottom: "7px", fontWeight: 400, }}>Total Clients</Typography>
      <Typography style={{fontSize: "20px", fontWeight: 700}}>1200</Typography>
      </div>
      
      </div>
       </div>;
};

export default CardLong;
