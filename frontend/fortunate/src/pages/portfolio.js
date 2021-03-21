import Button from "@material-ui/core/Button";
import { Line } from "react-chartjs-2";
import LineGraph from '../components/LineGraph';

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';

const Portfolio = () => {
    return (
        <div>
            <Grid container direction="column">
                <Grid container direction="row">
                    <Grid item m={4} padding="50">
                        <Container>
                            <LineGraph/>
                        </Container>
                    </Grid>
                    <Grid item>
                        
                    </Grid>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Portfolio