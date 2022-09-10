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
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));

    return (
        //         <div className={classes.root}>
        // <div className={classes.root1}>
        //             <Box
        //         component="img"
        //         sx={{
        //           height: 353,
        //           width: 550,
        //           maxHeight: { xs: 233, md: 167 },
        //           maxWidth: { xs: 350, md: 250 },
        //           margin: 20,
        //         }}
        //         alt="The house from the offer."
        //         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        //       />
        //             <div>
        //             <Collapse
        //        in={checked} {...(checked ? { timeout: 1000 } : {})}
        //       >
        //             <h1 className={classes.title} checked={checked}>
        //             Become a Volunteer<br/>
        //           </h1>
        //             <Typography checked={checked}>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        //             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        //               aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        //                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        //             </Typography><br/>
        //             <Button variant="outlined" color='warning'>learn more</Button>
        //             </Collapse>
        //             </div>
        //         </div>
        //         </div>





        //     <Box>
        // <Grid container spacing={2} columns={16}>
        //   <Grid item lg={6} xs={12}>
        //     <Item><Box
        //         component="img"
        //         sx={{
        //           height: 353,
        //           width: 550,
        //           maxHeight: { xs: 233, md: 167 },
        //           maxWidth: { xs: 350, md: 250 },
        //           margin: 20,
        //         }}
        //         alt="The house from the offer."
        //         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        //       /></Item>
        //   </Grid>
        //   <Grid item xs={8}>
        //     <Item><h1 className={classes.title} checked={checked}>
        //              Become a Volunteer<br/>
        //            </h1>
        //             <Typography checked={checked}>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        //             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        //               aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        //                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        //             </Typography><br/>
        //             <Button variant="outlined" color='warning'>learn more</Button></Item>
        //   </Grid>
        // </Grid>
        // </Box>



            <Grid container spacing={1} className={classes.root} data-aos='fade-up'>
                
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
                        {/* <Button variant="contained" size='large' href="/reportdisaster" sx={{ backgroundColor: "#FBB03C", '&:hover': { backgroundColor: "white", color: "#FBB03C" } }}>Report</Button> */}
                        <MDButton sx={{backgroundColor: "#F89c37",color:'#222222', '&:hover': { backgroundColor: "white", color: "#F89c37" }}}>Report</MDButton>
                    </CardContent>

                </Grid>
                
                <Grid item lg={6} xs={12} data-aos='flip-left'>
                <img src="https://tse1.mm.bing.net/th?id=OIP.2pxoqNO1L5DAqvBuRNoDQwHaEq&pid=Api&P=0" width="90%" height="90%"/>
                
                </Grid>

            </Grid>
     

    );
}