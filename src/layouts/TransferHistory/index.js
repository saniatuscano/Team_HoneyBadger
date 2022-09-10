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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data

// import TableData from "layouts/tables/data/projectsTableData";

function Tables() {
 const pColumns=[
    { Header: "from", accessor: "from", width: "30%", align: "left" },
      { Header: "to", accessor: "to", align: "left" },
      { Header: "amount", accessor: "amount", align: "center" },
 ]
 const pRows=[
    {
        from: <MDTypography variant="caption" color="text" fontWeight="medium">Sania</MDTypography>,
        to: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            sakshi
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
    },
    {
        from: <MDTypography variant="caption" color="text" fontWeight="medium">Sakshi</MDTypography>,
        to: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            colin
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
    },
    {
        from: <MDTypography variant="caption" color="text" fontWeight="medium">Akhilesh</MDTypography>,
        to: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Vibhav
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            500
          </MDTypography>
        ),
    }
 ]
//   const { columns: pColumns, rows: pRows } = TableData();

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
                bgColor="warning"
                borderRadius="lg"
                coloredShadow="warning"
              >
                <MDTypography variant="h6" color="white">
                 Transaction history
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      
    </DashboardLayout>
  );
}

export default Tables;
