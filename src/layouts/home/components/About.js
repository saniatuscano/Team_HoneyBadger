import React from 'react';
import { makeStyles } from '@mui/styles';

import { ImageList, ImageListItem, Typography, Box, Button, Collapse, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { data } from '../static/data';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';


import img from '../../../assets/images/images.jpg'

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
export default function About() {
    const classes = useStyles();
    
    return (
        <Grid container spacing={1} className={classes.root}>
                <Grid item lg={6} xs={12}>
                <img src="https://tse4.mm.bing.net/th?id=OIP.j5wSe0qcj4Sxi3nltUhUGwHaE8&pid=Api&P=0" width="90%" height="90%"/>
                
                </Grid>
                <Grid item lg={6} xs={12}>
                    <CardContent sx={{

                        margin: "20px",
                        marginBottom: "0"
                    }}>
                        <MDTypography component="div" sx={{ color: "#F9A837", fontSize: "20px" }} >
                            <h1>{"About NDRF"}</h1>
                        </MDTypography>
                        <MDTypography  component="div" sx={{ color: "black" }} >
                            {"The Disaster Management Act has statutory provisions for constitution of National Disaster Response Force (NDRF) for the purpose of specialized response to natural and man-made disasters. Accordingly, in 2006 NDRF was constituted with 8 Battalions. At present, NDRF has a strength of 12 Battalions with each Battalion consisting of 1149 personnel. In the beginning, the personnel of NDRF were deployed for routine law and order duties also. In a meeting of the NDMA with the Prime Minister on October 25, 2007, the need of NDRF being made a dedicated force was highlighted and accepted. This led to the notification of NDRF Rules on February 14th , 2008, making NDRF a dedicated force for disaster response related duties, under the unified command of DG NDRF."}
                        </MDTypography>
                    </CardContent>
                    <CardContent sx={{
                        marginTop: "20px",
                        marginLeft: "20px"
                    }}>
                        {/* <Button variant="contained" size='large' href="/reportdisaster" sx={{ backgroundColor: "#F89a37",color:'black', '&:hover': { backgroundColor: "white", color: "#F89a37" } }}>Report</Button> */}
                        <MDButton sx={{backgroundColor: "#F89a37",color:'#222222', '&:hover': { backgroundColor: "white", color: "#F89a37" }}}>Report</MDButton>
                    </CardContent>

                </Grid>
                

            </Grid>
    );
}