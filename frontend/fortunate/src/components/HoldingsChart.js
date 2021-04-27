import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

// Material UI
import { rgbToHex } from "@material-ui/core";

const state = {
	labels: ["Cash", "Stocks"],
	datasets: [
		{
			label: "Sector",
			backgroundColor: [
				"#70A851",
				"gold",
			],
			hoverBackgroundColor: [
				"#006400",
				"#B8860B",
			],
			data: [65, 59],
		},
	],
};

const HoldingsChart = () => {
	return (
		<Pie
			data={state}
			options={{
				title: {
					display: true,
					text: "Portfolio Holdings",
					fontSize: 30,
					fontColor: "gold",
				},
				legend: {
					display: false,
					position: "bottom",
				},
			}}
		/>
	);
};

export default HoldingsChart;
