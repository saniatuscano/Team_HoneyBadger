import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@mui/material";
import kerala from '../../../assets/images/kerala.jpg';
import assam from '../../../assets/images/Assam.jpg';
import arunachal from '../../../assets/images/arunachal.jpg';
import gujarat from '../../../assets/images/gujarat.jpg';
import SimpleBlogCard from 'examples/Cards/BlogCards/SimpleBlogCard';
import Navbar from "./Navbar";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));


// useEffect(()=>{
//   const callregister = async() =>{
//     const res = await axios.post('https:localhost:7000/register',{
//       name ,
//     },{
//       'X-Auth-Token' : Cookies.get('hwt-yok')
//     })
//   }
//   callregister()
 
// },[])
export default function Campaigns() {
  const classes = useStyles();
  const data = 
    [
      {title : "Kerala Floods", description : "All 14 districts of the state were placed on red alert.According to the Kerala government, one-sixth of the total population of Kerala had been directly affected by the floods and related incidents.",image:kerala},
      {title : "Arunachal Floods", description : "All 14 districts of the state were placed on red alert.According to the Kerala government, one-sixth of the total population of Kerala had been directly affected by the floods and related incidents.",image:assam},
      {title : "Maharashtra Tsunami", description : "All 14 districts of the state were placed on red alert.According to the Kerala government, one-sixth of the total population of Kerala had been directly affected by the floods and related incidents.",image:gujarat},
      {title : "Assam Floods", description : "All 14 districts of the state were placed on red alert.According to the Kerala government, one-sixth of the total population of Kerala had been directly affected by the floods and related incidents.",image:assam},
      {title : "Gujarat Earthquake", description : "All 14 districts of the state were placed on red alert.According to the Kerala government, one-sixth of the total population of Kerala had been directly affected by the floods and related incidents.",image:arunachal},
      
      ];
  
  return (
    <>

    <Navbar/>
    <div className={classes.box}>
   
    
        <Grid
          container
          spacing={4}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} md={12}>
         <Link to='/masio' > <MDButton>View Map</MDButton></Link></Grid>
          {data.map((elem) => (
            <Grid item xs={12} sm={6} md={4} key={data.indexOf(elem)}>
            <SimpleBlogCard
                image={elem.image}
                label="project #2"
                title={elem.title}
                description={elem.description}
                action={{
                  type: "internal",
                  route: "/campaign",
                  color: "default",
                  label: "Donate"}}/>

            </Grid>
          ))}
        </Grid>
    
    </div>
    </>
  );
}