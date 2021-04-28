import React, { Component, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

// Material UI
import { rgbToHex } from "@material-ui/core";
import axios from "axios";

const LineGraph = (props) => {
	const [chartData, setChartData] = useState({});
	const [value, setValue] = useState([]);
	const [time, setTime] = useState([]);

	const chart = () => {
		let x = [];
		let y = [];
		axios
			.post('/stock', {
				symbol: props.symbol
			}).then(res => {
				y = res.data.indicators.open;
				res.data.timestamp.forEach(element => {
					x.push(new Date(element * 1000).toLocaleTimeString());
				});
				setChartData({
					labels: x,
					datasets:[
						  {
							data:y,
							borderColor:[
								  (y[0] > y[367]) ? 'rgba(255, 50, 50, 0.9)' : 'rgba(50, 255, 50, 0.9)'
							]
						  }
					]
				});
			}).catch(err => {
				console.error(err);
			});
		console.log(x, y);	
	}
	useEffect(() => {
		chart();
	}, []);

	return (
			<div className='LineGraph'>
				<Line 
          			data={props.chartData}
					options = {
						{
							legend: {
								display: false
							},
          					scaleShowValues: true,
			          		scales: {
          						xAxes: [{
          							ticks: {
										maxTicksLimit: 27,
          								autoSkip: true,
										fontColor: "rgba(200, 200, 200, 0.8)"
          							},
								gridLines: {
									color: "rgba(99, 99, 99, 0.8)",
									display: false
								},
          						}],
								yAxes: [{
									ticks: {
										fontColor: "rgba(200, 200, 200, 0.8)"
									},
									gridLines: {
										color: "rgba(99, 99, 99, 0.8)",
										display: true
									},
									scaleLabel: {
										display: true,
										labelString: 'Value ($)',
										fontColor: 'rgba(200, 200, 200, 0.8)'
									}
								}]
          					},
							title: {
								display: true,
								text: (props.symbol.length) ? 'Price of ' + props.symbol : '',
								fontSize: 25,
								fontColor: "rgba(200, 200, 200, 0.8)"
							},
							tooltips: {
								backgroundColor: "rgba(33,33,33,0.8)",
								bodyFontColor: "rgba(200, 200, 200, 1)",
								custom: function(tooltip) {
									if (!tooltip) return;
									// disable displaying the color box;
									tooltip.displayColors = false;
								},
								callbacks: {
									label: (tooltipItem, data) => {
										return `$${~~(tooltipItem.value * 10000)/10000}`
									}
								}
							}
						}
					}
        		/>
		</div>
	);
};

export default LineGraph;
