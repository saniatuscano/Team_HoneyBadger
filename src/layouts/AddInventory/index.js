// Material Dashboard 2 React Components
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";


import MDButton from "components/MDButton";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
   
    {
      field: 'name',
      headerName: 'Name',
      width: 170,
      editable: true,
     
    },
    {
      field: 'desc',
      headerName: 'desc',
      width: 170,
      editable: true,
      
    },
    {
      field: 'pic',
      headerName: 'pic',
      width: 100,
      editable: true,
    },
   
    
  ];
  
  const rows = [
    { id: 1,name:'food',desc:'wayanad',pic:'view'},
    { id: 2,name:'water',desc:'wayanaxsjxhd',pic:'view'},
  ];

export default function Report() {
  const [multipleFiles, setMultipleFiles] = useState("");

  const valuesTemplate = {
    disaster: "",
    location: "",
    casualties: "",
    safety: "",
    document: "",
    infrastructure: "",
    situation: "",
  }

  const [values, setValues] = useState(valuesTemplate);

  const MultipleFileChange = (e) => {
    let nextFormState = {
      ...values,
      [e.target.document]: e.target.files,
    };
    setValues(nextFormState);
    setMultipleFiles(values);
  };

  const handleSubmit = (event) => {
    console.log(values);
    
    setValues(valuesTemplate);
  };

  const onUpdateField = (e) => {
    const nextFormState = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(nextFormState);
  };

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
                  Inventory
                </MDTypography>
              </MDBox>
            <MDBox sx={{ height: 320, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      </MDBox></Card><Card sx={{marginTop:'40px'}}>
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
                  Add Inventory
                </MDTypography>
              </MDBox>

              <MDBox
                pt={3}
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
                  <form>
                    

                    <MDBox mb={2}>
                      <MDInput
                        name="id"
                        type="number"
                        label="id"
                        fullWidth
                        value={values.id}
                        onChange={onUpdateField}
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        name="location"
                        type="text"
                        label="Name"
                        fullWidth
                        value={values.location}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    

                    <MDBox mb={2}>
                      <MDInput
                        name="infrastructure"
                        type="text"
                        label="Description"
                        fullWidth
                        value={values.infrastructure}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    

                   

                    <MDBox mb={2} item xs={12} md={6} lg={6}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={4}
                      >
                        <input
                          id="raised-button-file"
                          bgcolor="dark"
                          type="file"
                          onChange={(e) => MultipleFileChange(e)}
                          multiple
                        />
                        <MDBox item xs={12} md={6} lg={6}>
                          <MDTypography></MDTypography>
                        </MDBox>
                      
                      </Stack>
                    </MDBox>

                    <MDBox mb={2}>
                      <MDButton
                        size="medium"
                        variant="contained"
                        color="warning"
                        component="span"
                        onClick={handleSubmit}
                      >
                        Submit
                      </MDButton>
                    </MDBox>
                  </form>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
     
    </DashboardLayout>
  );
}