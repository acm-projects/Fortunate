import { Line } from "react-chartjs-2";

import LineGraph from "../components/LineGraph";
import PieChart from "../components/PieChart";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const Portfolio = () => {
	return (
		<div>
			<Grid
				container
				direction="row"
				justify="space-around"
				alignItems="center"
			>
				<Grid item sm={4} style={{ padding: 10 }}>
					<PieChart />
				</Grid>

				<Grid item sm={4} style={{ padding: 10 }}>
					<LineGraph />
				</Grid>

				<Grid item sm={4} style={{ padding: 10 }}>
					<Box
						display="flex"
						justifyContent="center"
						style={{
							backgroundColor: "black",
							height: "414px",
							color: "#666",
							fontSize: "20px",
							fontFamily: '"Spartan", sans-serif',
						}}
					>
						<div style={{ paddingTop: 10 }}>Recent Trades</div>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Portfolio;
