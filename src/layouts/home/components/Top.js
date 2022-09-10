import {React,useState} from "react"
// import top from '../static/top'
import { makeStyles } from '@mui/styles';
import './styles.css'
import MDAvatar from "components/MDAvatar";
// import { FaQuoteLeft } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const top = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Sakshi Shetty',
    post:'volunteer',
    desc:"Far far away, behind the word mountains, there live the blind texts",
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Kirti Lodha',
    post:'volunteer',
    desc:"Far far away, behind the word mountains, there live the blind texts",
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Sania Tuscano',
    post:'volunteer',
    desc:"Far far away, behind the word mountains, there live the blind texts",
  },]
const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // [theme.breakpoints.down('md')]: {
    //     flexDirection: 'column',
    // },
    backgroundColor: '#f8f8f8',

},




}));

const Top = () => {
  useEffect(()=>{
    Aos.init({duration:'2000'});
},[]);
  const classes=useStyles();

  return (
    <div className={classes.root}>
      <section className='testimonal padding'>
        <div className='container'>
          <h1 sx={{textAlign:'center'}}>Our Top Volunteers </h1>

          <div className='content grid2' data-aos='fade-up'>
            {top.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    {/* <img src={val.img} alt='' /> */}
                    <MDAvatar src={val.img}  size="sm" variant="rounded"/>
                    {/* <i className='fa fa-quote-left icon'></i> */}
                    {/* <FaQuoteLeft/> */}
                  </div>
                  <div className='name'>
                    <h2>{val.title}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Top;