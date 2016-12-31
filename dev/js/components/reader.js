import React from 'react';
import {  Button } from 'elemental';
import TheWord from '../containers/theWord';
import Controller from '../containers/controller';

const Reader = ({backPrepar}) => (
    <div>
    <Button type="hollow-warning" style={{position:"absolute", margin:5}} onClick={backPrepar}>New</Button>
    <TheWord/>
    <Controller />
    </div>
);


export default Reader;