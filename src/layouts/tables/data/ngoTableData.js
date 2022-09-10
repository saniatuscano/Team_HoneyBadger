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

import { ngoQueryAll } from "apicall/NgoApiCall";
import { useEffect, useState } from "react";
import { ipfsBaseUrl } from "services/urls";

export default function data() {

  const dataTemplate = {
    type: "ngo",
    role: 'ngo',
    userId :'',
    name :'',
    email : '',
    phone :'',
    balance: 0,
    location: {
      address:"somewhere"
    },
    documentHash: [],
    photo: '',  
    ngoId: '1',
    authorized: true,
    campaigns: [],
    futureData: null,
    active: true,
  }

  const [ngo, setNgo] = useState(dataTemplate);
  

  useEffect(() => {
    const data = {
      type: "ngo",
      role: 'ngo',
      userId :'1',
      name :'Bharat',
      email : 'bharat@gmail.com',
      phone :'7283928472',
      balance: 0,
      location: {
        address:"Building 103 some place somewhere"
      },
      documentHash: ['QmTCQKkRMndMg8JQWG8gcZsyCwdZTaCvu9nbs7aNd4s5pG'],
      photo: 'QmaDbpzEaVBzdskg7E93wEw69HZdDxvDEX9U4sYjGcf4Hg',  
      ngoId: '1',
      photo: 'QmaDbpzEaVBzdskg7E93wEw69HZdDxvDEX9U4sYjGcf4Hg',
      authorized: true,
      campaigns: [],
      futureData: null,
      active: true,
    }
    setNgo(data)
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
      { Header: "NID", accessor: "type", align: "left" },
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "verify", accessor: "verify", align: "center" },
      { Header: "contact", accessor: "contact", align: "center" },
      { Header: "documents", accessor: "documents", align: "center" },
    ],

    rows: [
      {
        type: <Job title={ngo.ngoId} description='' />,
        name: <Author image={ipfsBaseUrl + ngo.photo} name={ngo.name} email={ngo.email} />,
        verify: (
          // <MDBox ml={-1}>
          //   <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          // </MDBox>
          <MDTypography component="a" href="#" variant="caption" color={ngo.authorized ? 'success' : 'error'} fontWeight="medium">
            {ngo.authorized ? 'Authorized' : 'Unauthorized'}
          </MDTypography>
        ),
        contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {ngo.phone}
          </MDTypography>
        ),
        documents: (
          <Link to='/ngo/profile'onClick={() => {window.sessionStorage.setItem('ngoId', ngo.ngoId)}} >
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              View
            </MDTypography>
          </Link>
        ),
      },
      
    ],
  };
}
