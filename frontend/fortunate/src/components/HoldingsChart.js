import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

// Material UI
import { rgbToHex } from "@material-ui/core";

const state = {
	labels: ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5"],
	datasets: [
		{
			label: "Sector",
			backgroundColor: [
				"#B21F00",
				"#C9DE00",
				"#2FDE00",
				"#00A6B4",
				"#6800B4",
			],
			hoverBackgroundColor: [
				"#501800",
				"#4B5000",
				"#175000",
				"#003350",
				"#35014F",
			],
			data: [65, 59, 80, 81, 56],
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
