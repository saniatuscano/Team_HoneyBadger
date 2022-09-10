import React from 'react';
import { makeStyles } from '@mui/styles';
import img from '../../../assets/images/map.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
   
    img:{
        justifyContent:'center',
        width:'60%',
        height:"60%",
        [theme.breakpoints.down('sm')]: {
            width:'100%',
          },
    }
}));

const InfoMap = () => {
    useEffect(()=>{
        Aos.init({duration:'2000'});
    },[]);
    const classes = useStyles();
  return (
    <div className={classes.root} >
    
    <img src={img} className={classes.img} data-aos='fade-up'/>
    </div>
  )
}

export default InfoMap