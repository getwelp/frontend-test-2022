import React from 'react';
import Service from '../../components/Service';
import TopBar from '../../components/TopBar';
import Hero from '../../layout/Hero';
import "./index.css"
const Main = () => {
  return <div className="layout_main">
         <TopBar />
         <Service />
         <Hero />
        </div>;
};

export default Main;
