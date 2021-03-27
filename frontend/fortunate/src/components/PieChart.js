import { rgbToHex } from '@material-ui/core';
import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const PieChart = () => {
    return (
        <div className='PieChart'>
            <Pie
            height="400"
            width="600"
            options={{
                title:{
                    display:true,
                    text:"Current Holdings",
                    fontSize:20,
                    fontFamily:'"Spartan", sans-serif'
                }
            }}
            >

            </Pie>
            </div>
    )
}

export default PieChart
