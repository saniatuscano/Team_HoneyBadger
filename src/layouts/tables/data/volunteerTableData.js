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
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Button } from "@mui/material";

export default function data() {
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
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "type", accessor: "type", align: "left" },
      { Header: "verify", accessor: "verify", align: "center" },
      { Header: "contact", accessor: "contact", align: "center" },
      { Header: "documents", accessor: "documents", align: "center" },
    ],

    rows: [
      {
        name: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        type: <Job title="Manager" description="Organization" />,
        verify: (
          // <MDBox ml={-1}>
          //   <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          // </MDBox>
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Verify
          </MDTypography>
        ),
        contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1234567890
          </MDTypography>
        ),
        documents: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        type: <Job title="Programator" description="Developer" />,
        verify: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Verify
          </MDTypography>
        ),
        contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        documents: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            view
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        type: <Job title="Executive" description="Projects" />,
        verify: (
          // <MDBox ml={-1}>
          //   <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          // </MDBox>
          <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
            verified
          </MDTypography>
        ),
        contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        documents: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        type: <Job title="Programator" description="Developer" />,
        verify: (
          <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
          verified
          </MDTypography>
        ),
        contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        documents: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        type: <Job title="Manager" description="Executive" />,
        verify: (
          <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
          verified
          </MDTypography>
        ),
        contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        documents: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        type: <Job title="Programator" description="Developer" />,
        verify: (
          <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
          rejected
          </MDTypography>
        ),
       contact: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        documents: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
    ],
  };
}