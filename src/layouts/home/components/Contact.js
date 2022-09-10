
import React from "react"; 
import  Grid  from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';
import {  TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F89c37',


  },
  root1: {
    minHeight: '70vh',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.down('md')]: {
    //     flexDirection: 'column',
    // },
    backgroundColor: '#f89c37',
    color:"black",
    

},
  
}));
export default function ContactUs() {
  useEffect(()=>{
    Aos.init({duration:'2000'});
},[]);
  const classes = useStyles();
  return (
    <div className={classes.root1} >
      
      <Typography gutterBottom variant="h3" align="center" sx={{color:'#222222',textAlign:"center"}}>
       Contact Us
       </Typography><br/>
      <Grid container spacing={1} data-aos='fade-up'>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            {/* <Typography gutterBottom variant="h5">
              Contact Us
          </Typography>  */}
            {/* <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography>  */}
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="dark" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
