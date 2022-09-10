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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function Report() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeName = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setValues
  };
  const [multipleFiles, setMultipleFiles] = useState("");

  const valuesTemplate = {
    type: "campaign",
    disaster: "",
    disasterId: "1",
    campaignId: uuid(),
    ngoId: "1",
    targetAmount: 0,
    amount: 0,
    voluteers: [],
  
    donations: [
      {
      userId:"1",
      amount : "10",
      transactionId: "10101",
      name: "sdfas",
      phone: 0,
      email:"",
      futureData : {},
      timeStamp : "",
      updateDescription : ""
      }
    ],
  
    active: true,
    futureData: {},
    completed: true,
    timestamp: Date(),
    updateDescription: "",
    
  };

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
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          value={values.disaster}
                        >
                          Disaster
                        </InputLabel>
                        <Select
                          name="disaster"
                          value={values.disaster}
                          label="disaster"
                          onChange={onUpdateField}
                          sx={{ padding: "13px" }}
                        >
                        {
                          disasters.map((disaster)=>{
                            return <MenuItem value={disaster}>{disaster}</MenuItem>;
                          })
                        }
                          
                        </Select>
                      </FormControl>
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="targetAmount"
                        type="number"
                        label="Target Amount"
                        fullWidth
                        value={values.targetAmount}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    {/* <MDBox mb={2}>
                      <MDInput
                        name="targetAmount"
                        type="number"
                        label="Target Amount"
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
                    </MDBox> */}
                    <MDBox>
                      <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          Volunteers
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={personName}
                          onChange={handleChangeName}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <MDBox
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </MDBox>
                          )}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                          <br></br>
                        </Select>
                      </FormControl>
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
