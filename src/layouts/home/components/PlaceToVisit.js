import React from 'react';
import { makeStyles } from '@mui/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import{ Link }from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <Link to='/authentication/sign-up/volunteer'><ImageCard place={places[1]} checked={checked} /></Link>
      <Link to='/campaigns'><ImageCard place={places[0]} checked={checked} /></Link>
      <Link to='/authentication/sign-up/ngo'><ImageCard place={places[2]} checked={checked} /></Link>
    </div>
  );
}
