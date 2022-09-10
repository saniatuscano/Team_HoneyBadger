// Material Dashboard 2 React Components
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { useTheme } from "@mui/material/styles";

import MDButton from "components/MDButton";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";

import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';



export default function Report() {
  const theme = useTheme();

  const handleSubmit = (event) => {
    console.log(values);
    const nextFormState = {
      ...values,
      [event.target.setValues]: "",
    };
    setValues(nextFormState);
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
                  Create Campaign
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
                          name="disaster"
                          type="text"
                          label="disaster"
                          fullWidth
                          
                          onChange={onUpdateField}
                        />
                          
                     
                       
                     
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="targetAmount"
                        type="number"
                        label="Target Amount"
                        fullWidth
                        
                        onChange={onUpdateField}
                      />
                    </MDBox>

                   

                    <MDBox mb={2}>
                      <MDInput
                        name="infrastructure"
                        type="text"
                        label="Infrastructure Damage"
                        fullWidth
                        // value={values.infrastructure}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="situation"
                        type="text"
                        label="Current Situation"
                        fullWidth
                        // value={values.situation}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="safety"
                        type="text"
                        label="Safety Measures"
                        fullWidth
                        // value={values.safety}
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
                          type="file"
                          onChange={(e) => MultipleFileChange(e)}
                          multiple
                        />
                        <MDBox item xs={12} md={6} lg={6}>
                          <MDTypography></MDTypography>
                        </MDBox>
                        <label htmlFor="raised-button-file">
                          <MDButton
                            size="small"
                            variant="contained"
                            color="dark"
                            component="span"
                          >
                            Add
                          </MDButton>
                        </label>
                      </Stack>
                    </MDBox>
                   
                    <br />
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
