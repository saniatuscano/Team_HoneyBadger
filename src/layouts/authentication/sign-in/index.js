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

import { useState } from "react";

// react-router-dom components
import { Link,useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import axios from "axios";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import {toast} from 'react-toastify'
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Navbar from "layouts/home/components/Navbar";

import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'

import { login } from "../../../store/actions/authActions";
function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const history = useNavigate()
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const dispatch = useDispatch()
    const submitform = async(e) => {
      e.preventDefault();
      const newObj = {
        email,password
      }
      dispatch(login(newObj, history, Cookies))
      const res = await axios.post('http://localhost:7000/signin',newObj);
      console.log(res.data.status)
      if(res.data.status){
        localStorage.setItem("username",res.data.email);
        history('/Volunteer/dashboard')
      }else{
        console.log("Failed to login")
     
      }
    }
  return (
    <BasicLayout image={bgImage}>
        <Navbar/>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="warning"
          borderRadius="lg"
          coloredShadow="warning"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput 
              type="email" 
              label="Email"
              name="email" 
              onChange = { e => setEmail(e.target.value)}
              value= {email}
              fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
               name="password" 
              onChange = { e => setPassword(e.target.value)}
              value= {password}
              type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
            
              <MDButton variant="gradient" color="warning" fullWidth onClick={submitform}>
                Sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="warning"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
