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
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
// import MDButton from "components/MDButton";

// Images
/* import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
*/

export default function data() {
  const Tasks = ({ name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={2}>
      <MDBox ml={2} lineHeight={2}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDBox>
          <MDTypography variant="caption">{description}</MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "socialcredits", accessor: "socialcredits", align: "center" },
    ],

    rows: [
      {
        name: <Tasks name="John Michael" />,
        socialcredits: 89,
      },
      {
        name: <Tasks name="Alexa Liras" />,
        socialcredits: 689,
      },
      {
        name: <Tasks name="Laurent Perrier" />,
        socialcredits: 567,
      },
      {
        name: <Tasks name="Michael Levi" />,
        socialcredits: 23,
      },
      {
        name: <Tasks name="Richard Gran" />,
        socialcredits: 46,
      },
      {
        name: <Tasks name="Miriam Eric" />,
        socialcredits: 88,
      },
    ],
  };
}
