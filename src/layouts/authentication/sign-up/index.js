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
import { Link } from "react-router-dom";

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
import Volunteer from './volunteer'
import Ngo from "./ngo";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import Navbar from "layouts/home/components/Navbar";

function Cover(props) {


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
            Register as {props.type=="ngo" ? <span>Organisation</span>:<span>Volunteer </span>}
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter the following details to register
          </MDTypography>
        </MDBox>
        {props.type == "ngo" ?  <Ngo />:<Volunteer /> }
      </Card>
    {/* </CoverLayout> */}
    </BasicLayout>
  );
}

export default Cover;
