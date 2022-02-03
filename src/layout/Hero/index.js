import React from 'react';
import Grid from '@mui/material/Grid';
import CardLong from '../../components/CardLong';
import "./index.css"

const Hero = () => {
  return <Grid container spacing={2} className="hero_layout">
            <Grid item xs={8}>
               <CardLong />
            </Grid>
            <Grid item xs={3}>
              section 2
            </Grid>
        </Grid>
};

export default Hero;
