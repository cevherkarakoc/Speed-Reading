import React from 'react';
import Entrance from "../containers/entrance";
import Info from "./info";

const Prepar = () => (
    <div style={{
        display:"flex",
    alignItems: 'center',
    flexDirection:"column",
    
    }}>
        <Entrance/>
        <Info/>
    </div>
);

export default Prepar;