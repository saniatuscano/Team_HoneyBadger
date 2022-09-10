import React from 'react';
import { makeStyles } from '@mui/styles';
import { ImageList, ImageListItem, Typography, Box, Button, Collapse, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { data } from '../static/data';
import { useState, useEffect } from 'react';
import useWindowPosition from '../hook/useWindowPosition';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';
import { styled } from '@mui/material/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from '../../../assets/images/aboutus.svg'


import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        backgroundColor: 'white',

    },
    root1: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        margin: '20px'
    },
    title: {
        color: '#F89C37',
        fontSize: '2.5rem',
    },
}));
export default function Info() {
    useEffect(()=>{
        Aos.init({duration:'2000'});
    },[]);
    const classes = useStyles();
    const checked = useWindowPosition('place-to-visit');
    

    return (
       



            <Grid container spacing={1} className={classes.root} data-aos='fade-up'>
                
                <Grid item lg={6} xs={12}>
                    <CardContent sx={{

                        margin: "20px",
                        marginBottom: "0"
                    }}>
                        <MDTypography component="div" sx={{ color: "#F9A837", fontSize: "20px" }} >
                            <h1>{"About Us"}</h1>
                        </MDTypography>
                        <MDTypography  component="div" sx={{ color: "black" }} >
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                        </MDTypography>
                    </CardContent>
                    <CardContent sx={{
                        marginTop: "20px",
                        marginLeft: "20px"
                    }}>
                        {/* <Button variant="contained" size='large' href="/reportdisaster" sx={{ backgroundColor: "#FBB03C", '&:hover': { backgroundColor: "white", color: "#FBB03C" } }}>Report</Button> */}
                        <MDButton sx={{backgroundColor: "#F89c37",color:'#222222', '&:hover': { backgroundColor: "white", color: "#F89c37" }}}>Know more</MDButton>
                    </CardContent>

                </Grid>
                
                <Grid item lg={6} xs={12} data-aos='flip-left'>
                <img src={About} width="90%" height="90%"/>
                
                </Grid>

            </Grid>
     

    );
}