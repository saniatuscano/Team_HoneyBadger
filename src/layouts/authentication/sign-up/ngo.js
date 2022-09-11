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

// react-router-dom components
import { Link, Navigate } from "react-router-dom";


// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import BasicLayout from "layouts/authentication/components/BasicLayout";


// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const API_KEY = 'TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0'

import {InputLabel, MenuItem, Select } from '@mui/material';
import Navbar from "layouts/home/components/Navbar";
window.Buffer = window.Buffer || require('buffer').Buffer;
import {cli as client} from '../../../ipfs-config'
import {Disaster, web3} from '../../../Disaster'

function NGO() {
  const [address,setAddress] = useState('')
  const [response,setResponse] = useState([])
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
 const [file,setFile] = useState('')

  const captureFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    }


    e.preventDefault(); 
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      const created = await client.add(file);
      hash = created.path
        let accounts = await web3.eth.getAccounts();
        console.log("**********8",hash)
        let registerOrg = await Disaster.methods.addOrg(name,email,password,phone,location,hash).send({from : accounts[0]})
        navigate('/sign-in/ngo')
     
    } catch (error) {
      console.log(error.message)
    }
    // const newObj = {
    //   name, email,phoneno : phone, password
    // }
    // const res = await axios.post('http://localhost:7000/registerNgo',newObj);
    // if(res.data.status){
    //   navigate('/sign-in/ngo');
    // }
    // else console.log("Falied to register")
  }

//   useEffect(()=> {
//     const here_api = async () => {
//     if(address.length>0){
//       const res = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${API_KEY}`)
//     setResponse(res.data.items)
//     console.log(response)

//   }
//     }
//     here_api()
//   },[address])
  

  return (
    <BasicLayout>
      <Navbar/>
    {/* <CoverLayout image={bgImage} bgColor="dark"> */}
      <Card>
        <MDBox
          variant="gradient"
          bgColor="warning"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Register as Organisation
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter the following details to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput 
              type="text" 
              name = "name"
              onChange = { e => setName(e.target.value)}
              value = {name}
              label="Name" variant="standard" fullWidth />
            </MDBox>
</MDBox>
            <MDBox mb={2}>
              <MDInput
               type="email" 
               label="Email"
                name = "email"
                onChange = {e => setEmail(e.target.value)}
                value = {email}
              variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
               type="password" 
               label="Password"
               onChange = {e => setPassword(e.target.value)}
              value = {password}
              name = "password"
              variant="standard" fullWidth />
            </MDBox>
          
            <MDBox mb={2}>
              <MDInput type="number" 
              label="PhoneNo" 
              onChange ={ e => setPhone(e.target.value)}
              value = {phone}
              name = "phone"
              variant="standard" 
              fullWidth />
            </MDBox>

            <MDBox mb={2}>

              <MDInput type="file" label="Upload file" variant="standard" fullWidth onChange={captureFile} />

            </MDBox>
          
          
  
            <MDBox pt={4} pb={3} px={3}>
         
            <MDBox mb={2}>
              <MDInput 
              type="text" 
              name = "address"
              onChange = { e => setAddress(e.target.value)}
              value = {address}
              label="Location" variant="standard" fullWidth />
            </MDBox>

            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="warning"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
            
              <MDButton variant="gradient" color="warning" fullWidth onClick={onSubmit}>
                Sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/sign-in"
                  variant="button"
                  color="warning"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    {/* </CoverLayout> */}
    </BasicLayout>
  );
}

export default NGO;