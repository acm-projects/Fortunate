import Button from "@material-ui/core/Button";
import { Line } from "react-chartjs-2";
import LineGraph from '../components/LineGraph';
import PieChart from '../components/PieChart';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';


const Portfolio = () => {
    return (
        <div>
            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item sm={4} style={{padding:10}}>
                        <PieChart/>
                </Grid>

                <Grid item sm={4} style={{padding:10}}>
                        <LineGraph/>
                </Grid>

                <Grid item sm={4} style={{padding:10}}>
                    <Box   display='flex' justifyContent='center' style={{backgroundColor:'black', height:'414px', color:'white'}}>
                        Test
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Portfolio