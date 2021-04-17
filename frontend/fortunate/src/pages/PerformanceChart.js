import React, { Component } from "react";
import { Line } from "react-chartjs-2";

// Material UI
import { rgbToHex } from "@material-ui/core";
import axios from "axios";

// "proxy": "http://localhost:5000/fortunate-acm/us-central1/api",
// "proxy": "https://us-central1-fortunate-acm.cloudfunctions.net/api",

class PerformanceChart extends Component {
	constructor() {
		super();

		this.state = {
			labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			datasets: [
				{
					label: "Value",
					fill: false,
					lineTension: 0.0,
					backgroundColor: "rgba(75,192,192,1)",
					borderColor: "rgba(0,0,0,1)",
					borderWidth: 3,
					data: [65, 59, 80, 81, 56],
				},
			],
		};
	}

	componentDidMount() {
		// Get data from firestore
		console.log("Mounted!");
		axios.get("/portfoliotest").then(response => {
			console.log(response);

			var values = response.data;

			console.log(values);
		});
	}

	render() {
		return (
			<Line
				data={this.state}
				options={{
					title: {
						display: true,
						text: "Portfolio Performance",
						fontSize: 30,
					},
					legend: {
						display: false,
					},
				}}
			/>
		);
	}
}

export default PerformanceChart;
