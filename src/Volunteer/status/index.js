// Material Dashboard 2 React Examples

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

export default function Status() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Tasks
                </MDTypography>
              </MDBox>

              <Grid alignItems="center" justify="center">
                <MDBox pt={3}>
                  <DefaultProjectCard
                    image="http://techslides.com/demos/sample-videos/small.webm"
                    label="project #1"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/somewhere",
                      color: "info",
                      label: "view project",
                    }}
                  />

                  <DefaultProjectCard
                    image="http://techslides.com/demos/sample-videos/small.webm"
                    label="project #1"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/somewhere",
                      color: "info",
                      label: "view project",
                    }}
                  />
                </MDBox>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      
    </DashboardLayout>
  );
}
