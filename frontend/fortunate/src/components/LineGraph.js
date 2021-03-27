import { rgbToHex } from '@material-ui/core';
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const LineGraph = () => {
    return (
        <div className='LineGraph'>
            <Line
            height="400"
            width="600"
            options={{
                title:{
                    display:true,
                    text:"Portfolio Performance",
                    fontSize:20,
                    fontFamily:'"Spartan", sans-serif'
                }
            }}
            >

            </Line>
            </div>
    )
}

export default LineGraph