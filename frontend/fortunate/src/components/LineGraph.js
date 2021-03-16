import { rgbToHex } from '@material-ui/core';
import React, {Component} from 'react';
import {Line, Pie, Bar} from 'react-chartjs-2';

const LineGraph = () => {
    return (
        <div className='LineGraph'>
            <Line
            height={1}
            width={1}>

            </Line>
            </div>
    )
}

export default LineGraph