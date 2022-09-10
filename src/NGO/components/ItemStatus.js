import React from 'react'
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';


import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { number } from 'prop-types';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Item Name ', width: 130 },
  
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
  { field: 'volunteerName', headerName: 'Volunteer name', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    type : 'number',
    width: 160,
  },
  {
    field: 'assign',
    headerName: 'Assign',
   
    sortable: false,
    width: 160,
    valueGetter: (params) =>{
      if(`${params.row.status}` === "available") <button>Assign</button>
      else <p>Not available</p>
    }
     
  },
];

const rows = [
  { id: 1, name: 'Chips', volunteerName: 'Jae', quantity: 35 , location : 'Kerala', status : 'Available'},
  { id: 2, name: 'Lays', volunteerName: 'Sakshi', quantity: 325 , location : 'Panaji', status : 'Available'},
  { id: 3, name: 'Peanuts', volunteerName: 'Jess', quantity: 5 , location : 'Pune', status : 'Available'},
  { id: 4, name: 'Salt', volunteerName: 'Samay', quantity: 12 , location : 'Bhopal', status : 'Available'},
  { id: 5, name: 'Pepper', volunteerName: 'Bassi', quantity: 35 , location : 'Kerala', status : 'Available'},
  { id: 6, name: 'Chips', volunteerName: 'Tanmay', quantity: 5 , location : 'Mysuru', status : 'Available'},
  
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 450},
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



const ItemStatus = () => {
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
                Item status Details
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
  )
}

export default ItemStatus