import React from 'react';
import Grid from '@mui/material/Grid';
import  "./index.css"
import Main from "./main"
const Home = () => {
  return <div className="container">
      <Grid container>
        <Grid item xs={2}>
         <h1>side bar</h1>
        </Grid>
        <Grid item xs={10}>
         <Main />
        </Grid>
        </Grid>
  </div>;
};

export default Home;
