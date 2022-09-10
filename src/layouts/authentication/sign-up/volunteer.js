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
import React, { useState, useEffect } from 'react';
// react-router-dom components
import { Link, Navigate } from "react-router-dom";
import * as EmailValidator from 'email-validator'
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
import {useNavigate} from 'react-router-dom'

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import axios from 'axios';
// import {cli as client} from '../../../ipfs-config.js'

const API_KEY = 'TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0'



import {InputLabel, MenuItem, Select } from '@mui/material';
import Navbar from 'layouts/home/components/Navbar';
// import { useDispatch } from 'react-redux';



import {toast} from 'react-toastify'

function Volunteer(){

  const [address,setAddress] = useState('')
  const [response,setResponse] = useState([])
  const [file, setFile] = useState(null);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [documenthash,setHash] = useState('')
  const [lat,setLat] = useState('')
  const [lon, setLon] = useState('')
  const [add, setAdd] = useState('')
 const navigate = useNavigate()
 const [emailerror,setEmailerror] = useState('')

 const onSubmit = async(e) => {
  e.preventDefault()
  // console.log(name)
  // console.log(email)
  // console.log(phone)
  // console.log(lat)
  // console.log(lon)
  // console.log(add)

  const newObj = {
    name, email,phoneno : phone, password
  }
  const res = await axios.post('http://localhost:7000/registerVolunteer',newObj)
  console.log(res)
 if(res.data.status){ 
  console.log()
  navigate('/sign-in/vol');
  toast.success(res.data.message,
    {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: false,
})}else{
  toast.error("Failed to register", {
      position: "top-center",
      autoClose: 5000,
      pauseOnHover: false,
  })
}
  try {
    const created = await client.add(file);
    setHash(created.path)
         
  } catch (error) {
    console.log(error.hash)
  }
  console.log(documenthash)
 }
  useEffect(()=> {
    const here_api = async () => {
    if(address.length>0){
      const res = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${API_KEY}`)
    setResponse(res.data.items)
    console.log(response)

  }
    }
    here_api()
  },[address])

  useEffect(()=> {
      if(!validateEmail(email))setEmailerror('Enter valid email')
      else setEmailerror('');
    
  },[email])

  const validateEmail = (email) => {
    return EmailValidator.validate(email)
  }

 
  const captureFile = async(event)=>{
       
    const data = event.target.files[0];
   
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
        
      console.log("Buffer data: ", Buffer(reader.result));
      setFile(Buffer(reader.result));
    }

   
    try {
      const created = await client.add(file);
      console.log("CAPTURE FILE",created.path);
      setHash(created.path);
    
   
    } catch (error) {
      console.log(error.message)
    }
    

    event.preventDefault();

}

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
            Register as Volunteer
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
              label="Name" 
              variant="standard"
              name = "name" 
              onChange = {e => setName(e.target.value)}
              value = {name}
              fullWidth />
            </MDBox>
      <p style={{color : 'red', fontSize : '10px'}}>{emailerror}</p>
            <MDBox mb={2}>
              <MDInput 
              type="email"
              label="Email" 
              name= "email"
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
              <MDInput type="file" label="Upload file" variant="standard" fullWidth  />
            </MDBox>
          
          
  
            <MDBox mb={2}>
            <label >Select 
            <select >
            {response && 
               response.map ( (r,i)=> {
              <option value={i}>{r.title}</option>
               })
              }
            </select></label>

              <MDInput type="text" label="Location" variant="standard" onChange={e => setAddress(e.target.value)} fullWidth />
             
    
           <Select label="Select location from the dropdown">
              {response.map(r => 
              <MenuItem 
              onClick={e=> {
                setLat(r.position.lat);
                setLon(r.position.lng)
                setAdd(r.address.label)
              }}>{r.address.label}</MenuItem>)
            }
         
          </Select>
  
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
            {/* <Link to='/volunteer/dashboard'> */}<MDButton variant="gradient" color="warning" fullWidth onClick = {onSubmit}> 
                Register 
              
               </MDButton> {/* </Link> */}
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
            <MDTypography variant="button" color="text" onClick={e=>(console.log('home'))}>
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

export default Volunteer
