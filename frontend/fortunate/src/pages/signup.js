
import React, { Component } from 'react';

class signup extends Component {
  render() {
    return (
      <div>
        <h1> Signup Page </h1>
        </div>
    );
  }
}

export default signup;

// import Header from './components/Header'
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/fortunatelogo.png';
// import AppIcon to get logo
import axios from 'axios';
import { Link } from 'react-router-dom';
// MUi stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// import FormHelperText from '@material-ui/core/FormHelperText';

const styles = {
 form: {
   textAlign: 'center'
 },
 // can add a logo thing
 pageTitle: {
   margin: '10px auto 10px auto'
 },
 textField: {
   margin: '10px auto 10px auto'
 },
 button: {
   marginTop: 20,
   position: 'relative'
 },
 customError: {
   color: 'red',
   fontSize: '0.8rem',
   marginTop: 10
 },
 progress: {
   position: 'absolute'
 }
};

class signup extends Component {
 constructor(){
   super();
   this.state = {
     email:'',
     password:'',
     comfirmPassword:'',
     handle:'',
     loading: false,
     errors: {}
   };
 }
 handleSubmit = (event) => {
   event.preventDefault();
   this.setState({
     loading: true
   });
   const newUserData = {
     email: this.state.email,
     password: this.state.password,
     confirmPassword: this.state.confirmPassword,
     handle: this.state.handle
   };   ///////////////////////////////////////;
   axios
   .post('/signup', newUserData)
   .then((res) => { //reached here so successful
     console.log(res.data);
     localStorage.setItem('FBIdToken', 'Bearer ${res.data.token}');
     this.setState({
       loading: false
     });
     this.props.history.push('/'); //all done good so redirects to home page
   })
   .catch((err) => {
     this.setState({
     errors: err.response.data,
     loading: false
   }); ///////////////////////////;
 });/////////////////////////////////;
 };
 handleChange = (event) => {
   this.setState({
     [event.target.name]: event.target.value
   });
 };
 render() {
   const { classes } = this.props;
   const { errors, loading } = this.state;
   return (
     <Grid container className={classes.form}>
       <Grid item sm/>
       <Grid item sm>
       <img src={AppIcon} alt="coin" width="100" height="100"/>
         <Typography variant="h3" className={classes.pagetitle}>
         Signup
         </Typography>
         <form noValidate onsubmit={this.handleSubmit}>

         <TextField
         inputProps={{style: {color: 'gold' }}} // changes input color to gold
         InputLabelProps={{style: {color: '#fff' },}} // changes label color to white
          id="email"
          name="email"
          type="email"
          label="Email"
          className={classes.textField}
         helperText={errors.email}
         error={errors.email ? true : false}
         value={this.state.email}
         onChange={this.handleChange}
         fullWidth
         />

         <TextField
         inputProps={{style: {color: 'gold' }}} // changes input color to gold
         InputLabelProps={{style: {color: '#fff' },}} // changes label color to white
         id="password"
         name="password"
         type="password"
         label="Password"
         className={classes.textField}
         helperText={errors.password}
         error={errors.password ? true : false}
         value={this.state.password}
         onChange={this.handleChange}
         fullWidth
         />

         <TextField
         inputProps={{style: {color: 'gold' }}} // changes input color to gold
         InputLabelProps={{style: {color: '#fff' },}} // changes label color to white
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         label="Confirm Password"
         className={classes.textField}
         helperText={errors.confirmPassword}
         error={errors.confirmPassword ? true : false}
         value={this.state.confirmPassword}
         onChange={this.handleChange}
         fullWidth
         />

         <TextField
         inputProps={{style: {color: 'gold' }}} // changes input color to gold
         InputLabelProps={{style: {color: '#fff' },}} // changes label color to white
         id="handle"
         name="handle"
         type="text"
         label="Handle"
         className={classes.textField}
         helperText={errors.handle}
         error={errors.handle ? true : false}
         value={this.state.handle}
         onChange={this.handleChange}
         fullWidth
         />

         {errors.general && (
           <Typography variant="body2" className={classes.customError}>
           {errors.general}
           </Typography>
         )}
         <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={loading}>
           Signup
           {loading && <CircularProgress size={30} className={classes.progress}/>}
         </Button>
<br />
         <small>Already have an account? Login <Link to="/login" style={{color: '#FFF'}}>here</Link></small>
         </form>
       </Grid>
       <Grid item sm/>
       </Grid>
   );
 }
}

signup.propTypes = {
 classes: PropTypes.object.isRequired
}

export default withStyles(styles)(signup);
