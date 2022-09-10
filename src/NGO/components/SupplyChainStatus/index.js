import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import MDBox from 'components/MDBox';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDTypography from 'components/MDTypography';
import { DataGrid } from '@mui/x-data-grid';
import { number } from 'prop-types';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import './styles.css'
import MDAvatar from "components/MDAvatar";
import { Dialog } from '@mui/material';

import {useState} from 'react'
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import {
  Button,
  Avatar,
  DialogActions,
  DialogContent,
  DialogTitle,TextField,
  Tab, Typography} from '@mui/material';
import { DisplayMap } from 'layouts/DisplayMap';
 function hi(){
    console.log('hi')
};
export default function Demand() {
   
  const [value, setValue] = React.useState('1');
  const [showDialog, setShowDialog] = useState(false)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  
  const openDialog = () => setShowDialog(true)
  const closeDialog = () => setShowDialog(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const submitForm = (e) => {
    e.preventDefault();
    closeDialog();
    displayRazorpay();
    setAmount('');
    setName('');
    setEmail('');
    setContact('')
  }

  
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
                                <ol class="progtrckr" data-progtrckr-steps="5">
    <li class="progtrckr-done" onClick={openDialog}>Order Processing</li>
    <Dialog open={showDialog} onClose={closeDialog} disableBackdropClick>
        <Box >
          <DialogTitle>Details</DialogTitle>
          <DialogContent dividers style={{ width: '500px', height: '370px' }}>
           <h1>Bandra, Mumbai</h1>
            <p>loremysdaghjdvbghs sdjhfvbsnd f hsbdfjvsdgfvsd hfh</p>
            <DisplayMap/>
          </DialogContent>
          <DialogActions>
            {/* <MDButton size="small" variant="contained"  color="dark" component="span"  onClick={submitForm}>
              SUBMIT
            </MDButton> */}
            <MDButton  onClick={closeDialog}>
              CANCEL
            </MDButton>
          </DialogActions>
        </Box>
      </Dialog>
<li class="progtrckr-done">Pre-Production</li>
<li class="progtrckr-done">In Production</li>
<li class="progtrckr-todo">Shipped</li>
<li class="progtrckr-todo">Delivered</li>

</ol>


                               
                            
                            </Card>
                            </Grid>
                            </Grid>
                            </MDBox>
                            
                            </DashboardLayout>
                            
                            );
}