import React,{useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Info from './components/Info';
import About from './components/About';
// import Top from './components/Top';
// import TopCard from './components/TopCard';
import PageLayout from 'examples/LayoutContainers/PageLayout';
import img from '../../assets/images/bgd.jpg'
import InfoMap from './components/InfoMap';
import Contact from './components/Contact';
import Top from './components/Top';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily:'Roboto',
    width: '100%'
  },
}));
export default function Home() {
  const classes = useStyles();

  useEffect(()=> {
    console.log("HOME")
  })
  return (
    <div className={classes.root}>
        <PageLayout>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      <Info/>
      
      {/* <About/> */}
      {/* <InfoMap/> */}
      
      <Contact/>
      <Top/>
      </PageLayout>
    </div>
  );
}