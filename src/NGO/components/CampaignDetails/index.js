import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { TextField } from "@mui/material";
import { v4 as uuid } from "uuid";

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

const valuesTemplate = {
  type: "report",
  reportId: uuid(),
  campaignId: uuid(),
  volunteerId: uuid(),
  description: "",
  priority: "",
  address: "",
  latitude: 0,
  longitude: 0,
  voluteer: [],
  items: [
    {
      itemId: uuid(),
      quantity: "",
      itemLocation: [
        {
          latitude: 0,
          longitude: 0,
          address: "",
        },
      ],
      itemStatus: 0,
    },
  ],
  status: 0,
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
const give_tasks = ["rice", "water", "help ndrf", "rescue people", "food"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [values, setValues] = useState(valuesTemplate);

  const handleChangeName = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeTask = (event) => {
    const {
      target: { value },
    } = event;
    setTasks(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setPersonName([...personName]);
  };

  const handleOnSubmit = (e) => {
    const finalData = {
      ...values,
      volunteer: personName,
      //address: response.map((r) => r.address.label),
    };
    console.log(JSON.stringify({ personName, tasks }));
    console.log(values)
  };
  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
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
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name, index) => (
                      <MenuItem
                        key={index}
                        
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                    <br></br>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="chip-label">Tasks</InputLabel>
                  <Select
                    labelId="chip-label"
                    id="multiple-chip"
                    multiple
                    value={tasks}
                    onChange={handleChangeTask}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {give_tasks.map((task) => (
                      <MenuItem
                        key={task}
                        value={task}
                        style={getStyles(task, give_tasks, theme)}
                      >
                        {task}
                      </MenuItem>
                    ))}
                  </Select>
                  <br />{" "}
                  <TextField
                    id="filled-search"
                    label="custom tasks"
                    type="search"
                    variant="filled"
                  />
                  {/* <MDButton variant="contained" onClick={() => handleAddClick()} sx={{margin:"3px",backgroundColor:"#f98c37", color:'#222222','&:hover':{backgroundColor:"#222222",color:"#f98c37"}}} >Add</MDButton> */}
                  <MDButton
                    variant="contained"
                    onClick={() => handleOnSubmit()}
                    sx={{
                      margin: "3px",
                      backgroundColor: "#f98c37",
                      color: "#222222",
                      "&:hover": {
                        backgroundColor: "#222222",
                        color: "#f98c37",
                      },
                    }}
                  >
                    Submit
                  </MDButton>
                </FormControl>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    </div>
  );
}
