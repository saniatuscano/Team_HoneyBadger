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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
const imgUrl = 'https://sih-infura.infura-ipfs.io/ipfs/QmaDbpzEaVBzdskg7E93wEw69HZdDxvDEX9U4sYjGcf4Hg'
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom'

import { volunteerQueryAll } from "apicall/VolunteerApiCall";
import { useEffect, useState } from "react";
import { ipfsBaseUrl } from "services/urls";

export default function data() {

  const dataTemplate = {
    type: 'user',
    role: 'user',
    userId :'',
    name :'',
    email : '',
    phone :'',
    location: '',
    balance: '',
    documentHash: [''],
    photo: '',
    authorized: true,
    socialCredit: 0,
    campaigns: [],
    photo: '' ,
    futureData: null ,
    active: false,
  }

  const [volunteer, setvolunteer] = useState(dataTemplate);
  

  useEffect(() => {
    const data = {
      type: 'user',
      role: 'user',
      userId :'1',
      name :'Colin',
      email : 'colin@gmail.com',
      phone :'92837483748',
      location: {
        address:'somewhere over the rainbow'
      },
      balance: 0,
      documentHash: [''],
      photo: 'QmaDbpzEaVBzdskg7E93wEw69HZdDxvDEX9U4sYjGcf4Hg',
      authorized: true,
      socialCredit: 0,
      campaigns: [],
      futureData: null ,
      active: false,
    }
    setvolunteer(data)
  },[])


  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "VID", accessor: "type", align: "left" },
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "verify", accessor: "verify", align: "center" },
      { Header: "contact", accessor: "contact", align: "center" },
      { Header: "documents", accessor: "documents", align: "center" },
    ],

    rows: [
      {
        type: <Job title={volunteer.volunteerId} description='' />,
        name: <Author image={ipfsBaseUrl + volunteer.photo} name={volunteer.name} email={volunteer.email} />,
        verify: (
          // <MDBox ml={-1}>
          //   <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          // </MDBox>
          <MDTypography component="a" href="#" variant="caption" color={volunteer.authorized ? 'success' : 'error'} fontWeight="medium">
            {volunteer.authorized ? 'Authorized' : 'Unauthorized'}
          </MDTypography>
        ),
        contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {volunteer.phone}
          </MDTypography>
        ),
        documents: (
          <Link to='/volunteer/profile'onClick={() => {window.sessionStorage.setItem('volunteerId', volunteer.volunteerId)}} >
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              View
            </MDTypography>
          </Link>
        ),
      },
      
    ],
  };
}
