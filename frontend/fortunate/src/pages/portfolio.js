import { Line, Pie } from "react-chartjs-2";

//import PerformanceChart from "../components/PerformanceChart";
import PerformanceChart from "./PerformanceChart";
import HoldingsChart from "../components/HoldingsChart";
import TransactionList from "./TransactionList"

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
				alignItems="flex-start">
				<Grid>
					<Grid item style={{ paddingTop: 30, width: "50vw" }}>
						<PerformanceChart />
					</Grid>
					<Grid item style={{ padding: 50, width: "50vw" }}>
						<HoldingsChart />
					</Grid>
				</Grid>

				<Grid item style={{ paddingTop: 30, width: "25vw" }}>
					<Box
						display="flex"
						justifyContent="center"
						style={{
							backgroundColor: "#666",
							height: "400",
							width: "600",
							color: "gold",
							fontSize: "20px",
							fontFamily: '"Spartan", sans-serif',
						}}
					>
					<div style={{ paddingTop: 10 }}>Recent Trades</div>
					</Box>
					<TransactionList />
				</Grid>
			</Grid>
		</div>
	);
};

export default Portfolio;
