/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import { useEffect } from "react";

let volunteers = [{
  name : "sania",
  email: "sania@gmail.com",
  phone : "7283928472"
},{
  name : "vibhav",
  email: "vibhav@gmail.com",
  phone : "0987654321"
},{
  name : "colin",
  email: "colin@gmail.com",
  phone : "3435678899"
}];

export default function data() {

  useEffect(() => {
    localStorage.setItem('volunteer', JSON.stringify(volunteers));
  }, []);
  // const Project = ({ image, name }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" variant="rounded" />
  //     <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
  //       {name}
  //     </MDTypography>
  //   </MDBox>
  // );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Name", accessor: "Name", width: "30%", align: "left" },
      { Header: "email", accessor: "email", align: "left" },
      { Header: "phone", accessor: "phone", align: "center" },
      { Header: "documents", accessor: "documents", align: "center" },
      { Header: "verify", accessor: "verify", align: "center" },
    ],

    rows: 
      volunteers.map((obj,index)=>{
        
        return {
          Name: <MDTypography variant="caption" color="text" fontWeight="medium">{obj.name}</MDTypography>,
        email: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {obj.email}
          </MDTypography>
        ),

        phone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {obj.phone}
          </MDTypography>
        ),
        documents: <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        view
      </MDTypography>,
        verify: (
          <MDTypography component="a" href = "/statusupdate"  color="text" onClick = {()=>{
            localStorage.setItem("selectedIndex",JSON.stringify(index));
          }}>
            <Icon>check</Icon>
          </MDTypography>
        )
        }
      })
      // {
      //   ,
      // {
      //   Name: <MDTypography variant="caption" color="text" fontWeight="medium">Vibhav</MDTypography>,
      //   email: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //      vibhav@gmail.com
      //     </MDTypography>
      //   ),

      //   phone: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       74t37598519
      //     </MDTypography>
      //   ),
      //   documents: <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //   view
      // </MDTypography>,
      //   verify: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon onCli>check</Icon>
      //     </MDTypography>
      //   ),
      // },
      // {
      //  Name:<MDTypography variant="caption" color="text" fontWeight="medium">colin</MDTypography> ,
      //   email: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       colin@gmail.com
      //     </MDTypography>
      //   ),

      //   phone: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       9371461879
      //     </MDTypography>
      //   ),
      //   documents: <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //   view
      // </MDTypography>,
      //  verify: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>check</Icon>
      //     </MDTypography>
      //   ),
      // },
 
      
    ,
  };
}
