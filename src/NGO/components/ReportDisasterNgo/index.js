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
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Report
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
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          value={values.disaster}
                        >
                          Disaster Type
                        </InputLabel>
                        <Select
                          name="disaster"
                          value={values.disaster}
                          label="disaster"
                          onChange={onUpdateField}
                          sx={{ padding: "13px" }}
                        >
                          <MenuItem value="Floods">Floods</MenuItem>
                          <MenuItem value="Drought">Drought</MenuItem>
                          <MenuItem value="Earthquakes">Earthquakes</MenuItem>
                          <MenuItem value="Wildfires">Wildfires</MenuItem>
                          <MenuItem value="Hurricanes">
                            Hurricanes and Tropical Storms
                          </MenuItem>
                          <MenuItem value="Tornadoes">
                            Tornadoes and Severe Storms
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="location"
                        type="text"
                        label="Place of Disaster"
                        fullWidth
                        value={values.location}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="casualties"
                        type="number"
                        label="No. of Casualties"
                        fullWidth
                        value={values.casualties}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="infrastructure"
                        type="text"
                        label="Infrastructure Damage"
                        fullWidth
                        value={values.infrastructure}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="situation"
                        type="text"
                        label="Current Situation"
                        fullWidth
                        value={values.situation}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="safety"
                        type="text"
                        label="Safety Measures"
                        fullWidth
                        value={values.safety}
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