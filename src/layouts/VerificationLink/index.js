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
            <Card sx={{marginTop:'40px'}}>
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
                  Create Verification Link
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
                        label=" Report id"
                        fullWidth
                        value={values.id}
                        onChange={onUpdateField}
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        name="id"
                        type="number"
                        label=" Volunteer id"
                        fullWidth
                        value={values.id}
                        onChange={onUpdateField}
                      />
                    </MDBox>
                    

                    

                    

                    <MDBox mb={2}>
                      <MDButton
                        size="small"
                        variant="gradient"
                        color="dark"
                        component="span"
                        onClick={handleSubmit}
                        sx={{display:'flex', justifyContent:'center'}}
                      >
                        Create
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