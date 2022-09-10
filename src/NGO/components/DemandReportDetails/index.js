import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import MDBox from 'components/MDBox';
import  Card  from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDTypography from 'components/MDTypography';
import { DataGrid } from '@mui/x-data-grid';
import { number } from 'prop-types';


//itemid, quantity,itemlocation,lat,lon
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'iid', headerName: 'Item ID', width: 120 },
    // { field: 'vid', headerName: 'Volunteer ID', width: 120 },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 170,
      editable: true,
      type:number
    },
    {
      field: 'itemloc',
      headerName: 'Item Location',
      width: 100,
      editable: true,
    },
    {
      field: 'lat',
      headerName: 'Latitude',
      type: 'number',
      
    },
    {
      field: 'lon',
      headerName: 'Longitude',
      type: 'number',
      
    },
    
  ];
  
  const rows = [
    { id: 1,iid:3 ,quantity: 'Snow', itemloc: "xv ewybje",lat:23.45,lon:45.20},
    { id: 2,iid:3 ,quantity: 'Shbun', itemloc: "xv ewybje",lat:23.45,lon:45.20},
    { id: 3,iid:3 ,quantity: 'Snow', itemloc: "xv ewybje",lat:23.45,lon:45.20},
    { id: 4,iid:3 ,quantity: 'Snow', itemloc: "xv ewybje",lat:23.45,lon:45.20},
   
  ];


export default function Demand() {


  return (
    // <Box sx={{ height: 520, width: '100%' }}>
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
                  Demand Reports Details
                </MDTypography>
              </MDBox>
            <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      </Box>
      </Card>
      </Grid>
      </Grid>
      </MDBox>
      </DashboardLayout>
    
  );
}
