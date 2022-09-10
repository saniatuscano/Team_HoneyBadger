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
import {Link} from 'react-router-dom'
 
 
//itemid, quantity,itemlocation,lat,lon
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'cid', headerName: 'Campaign ID', width: 120 },
    { field: 'vid', headerName: 'Volunteer ID', width: 120 },
   
    {
      field: 'address',
      headerName: 'Address',
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
    {
      field: 'status',
      headerName: 'status',
      editable:'true',
     
    },
    {
      field: 'details',
      headerName: 'details',
      renderCell: (params) => (
        <Link to="/ngo/item-details" className="btn btn-primary">View</Link>
      ),
 
    },
   
  ];
 
  const rows = [
    { id: 1,cid:3 ,vid:23, address: "xv ewybje",lat:23.45,lon:45.20,status:'pending'},
    { id: 2,cid:3 ,vid:3, address: "xv ewybje",lat:23.45,lon:45.20,status:'pending'},
    { id: 3,cid:3 ,vid:4, address: "xv ewybje",lat:23.45,lon:45.20,status:'pending'},
    { id: 4,cid:3 ,vid:3, address: "xv ewybje",lat:23.45,lon:45.20,status:'pending'},
   
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
                  Demand Reports
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
 

