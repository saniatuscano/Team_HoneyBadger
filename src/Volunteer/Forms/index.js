// Material Dashboard 2 React Components
import MDInput from "components/MDInput";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";

import { Grid } from "@mui/material";
import MDButton from "components/MDButton";

export default function Forms() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        style={{
          display: "flex",
          justifyContent: "center",
          justify: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          item
          xs={12}
          md={6}
          lg={6}
          padding="20px"
        >
          <MDBox mb={2} component="span">
            <MDInput
              type="text"
              label="Text"
              variant="outlined"
              fullWidth="true"
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="search" label="Search" fullWidth="true" />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="email" label="Email" fullWidth="true" />
          </MDBox>

          <MDBox mb={2}>
            <MDInput type="url" label="URL" fullWidth="true" />
          </MDBox>

          <MDBox mb={2}>
            <MDInput type="tel" label="Phone" fullWidth="true" />
          </MDBox>

          <MDBox mb={2}>
            <MDInput type="password" label="Password" fullWidth="true" />
          </MDBox>

          <MDBox mb={2}>
            <MDInput type="number" label="Number" fullWidth="true" />
          </MDBox>

          <MDBox mb={2}>
            <MDInput type="datetime" label="Date time" fullWidth="true" />
          </MDBox>

          <MDBox mb={2}>
            <MDButton size="small" variant="contained" color="primary">
              Submit
            </MDButton>
          </MDBox>
        </Grid>
      </MDBox>
      
    </DashboardLayout>
  );
}
