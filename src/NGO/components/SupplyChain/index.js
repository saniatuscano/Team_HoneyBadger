import * as React from 'react';
import Box from '@mui/material/Box';
import MDBox from 'components/MDBox';
import  Card  from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDTypography from 'components/MDTypography';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { number } from 'prop-types';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'iid', headerName: 'Item id ', width: 130 },
  
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 90,
  },
  {
    field: 'location',
    headerName: 'Location',
    type : 'number',
    width: 160,
  },
  ,
  {
    field: 'latitude',
    headerName: 'Latitude',
    type : 'number',
    width: 160,
  },
  ,
  {
    field: 'longitude',
    headerName: 'Longitude',
    type : 'number',
    width: 160,
  }

];

const rows = [
 
  { id: 6, iid : 13, quantity: 4 , location : 'Mysuru', latitude: 87.33 , longitude : 22.32 },
  { id: 7, iid : 13, quantity: 4 , location : 'Panjim', latitude: 87.33 , longitude : 22.32 },
  { id: 8, iid : 13, quantity: 4 , location : 'Bhopal', latitude: 87.33 , longitude : 22.32 },
  { id: 9, iid : 13, quantity: 4 , location : 'Kolkata', latitude: 87.33 , longitude : 22.32 },
  { id: 1, iid : 13, quantity: 4 , location : 'Mysuru', latitude: 87.33 , longitude : 22.32 },

  
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
      />
  
      </Box>
      </Card>
      </Grid>
      </Grid>
      </MDBox>
      </DashboardLayout>
    
  );
}