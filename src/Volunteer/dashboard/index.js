// @mui material components
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import DataTable from "examples/Tables/DataTable";
import tasksTableData from "Volunteer/tables/data/tasksTableData";

import Overview from "layouts/profile";
import Top from "layouts/home/components/Top";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const { columns, rows } = tasksTableData();
  
  const camcolumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    
    // { field: 'vid', headerName: 'Volunteer ID', width: 120 },
    {
      field: 'name',
      headerName: 'Name',
      width: 370,
      editable: true,
      type:'text'
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 370,
      editable: true,
      type:'text'
    },
    
    
  ];
  
  const camrows = [
    { id: 1, name: "Campaign 1", description: "qwertyuiopkjhgfdsazxcvbnm" },
    { id: 2, name: "Campaign 2", description: "qwertyuiopkjhgfdsazxcvbnm" },
    { id: 3, name: "Campaign 3", description: "qwertyuiopkjhgfdsazxcvbnm" },
    { id: 4, name: "Campaign 4", description: "qwertyuiopkjhgfdsazxcvbnm" },
    { id: 5, name: "Campaign 5", description: "qwertyuiopkjhgfdsazxcvbnm" },
    
   
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="leaderboard"
                title="Rank"
                count={281}
                percentage={{
                  color: "warning",
                  amount: "+55",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="task"
                color="warning"
                title="Today's Tasks"
                count="38"
                percentage={{
                  color: "warning",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="store"
                title="Social Credits"
                count="34"
                percentage={{
                  color: "warning",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="task"
                title="Completed Tasks"
                count="35"
                percentage={{
                  color: "warning",
                  amount: "+2%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="social credits"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in credits.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Top />

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
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Tasks
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
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
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Campaigns
                  </MDTypography>
                </MDBox>
                <MDBox pt={3} sx={{ height: 520, width: '100%' }}>
                  <DataGrid
                    rows={camrows}
                    columns={camcolumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
