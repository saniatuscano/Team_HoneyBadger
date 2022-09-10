// Material Dashboard 2 React Components
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";

const API_KEY = 'TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0'

import MDButton from "components/MDButton";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import axios from 'axios';

import { states } from "layouts/data/states";
import { disastersList } from "layouts/data/disasterList";
import { magnitudes } from "layouts/data/magnitudes";

export default function Report() {
  const [address,setAddress] = useState('')
  const [multipleFiles, setMultipleFiles] = useState("");
  const [response, setResponse] = useState([]);

  const dataTemplate = {
    type : '',
    disasterId :'',
    state: '',
    district : '',
    locationObj : {
      latitude:0,
      longitude:0,
      address:''
    },
    disasterType : '',
    magnitude : 0,
    timestamp : '',
    active : false,
    futureData : null,
  }
  const [disaster, setDisaster] = useState(dataTemplate);
  

  // useEffect(() => {
    // const data = {
       
    //     type : 'disaster',
    //     disasterId :'euqo23',
    //     state: 'Maharashtra',
    //     district : 'Nagpur',
    //     locationObj : {
    //       lat:0,
    //       long:0,
    //       address:'Some place nice'
    //     },
    //     disasterType : 'Flood',
    //     magnitude : 0,
    //     photo:[''],
    //     timestamp : 'nconcncsa',
    //     active : false,
    //     futureData : null,
    
    // }

    
    
  // },[])


  

  
  useEffect(()=> {
    const here_api = async () => {
      if(address.length>0){
        const res = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${API_KEY}`)
      setResponse(res.data.items)
      console.log(response)
  
    }
      }
      here_api()
  }, [address])

  const MultipleFileChange = (e) => {
    let nextFormState = {
      ...disaster,
      [e.target.photo]: e.target.files,
    };
    setDisaster(nextFormState);
    setMultipleFiles(disaster);
  };

  const handleSubmit = (event) => {
    console.log(disaster);
    setDisaster(dataTemplate);
  };

  const onUpdateField = (e) => {
    const nextFormState = {
      ...disaster,
      [e.target.name]: e.target.value,
    };
    setDisaster(nextFormState);
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
                          value={disaster.disasterType}
                        >
                          Disaster Type
                        </InputLabel>
                        <Select
                          name="disasterType"
                          value={disaster.disasterType}
                          label="disaster"
                          onChange={onUpdateField}
                          sx={{ padding: "13px" }}
                        >
                          {disastersList.map((value,index) => {
                            return(<MenuItem key={index} value={value}>{value}</MenuItem>)
                          })}
          
                        </Select>
                      </FormControl>
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="location"
                        type="text"
                        label="Place of Disaster"
                        fullWidth
                        value={address}
                        onChange={(e) => {setAddress(e.target.value)}}
                      />
                    </MDBox>
                    <Select label="Select location from the dropdown">
                        {response.map((r, index) => 
                        <MenuItem key={index}
                        onClick={e=> {
                          const nextFormState = {
                            ...values,
                            locationObj: {
                              latitude:r.position.lat,
                              longitude:r.position.lng,
                              address:r.address.label
                            },
                       };
                       console.log(nextFormState, r);
                          setDisaster(nextFormState);
                          setAddress(r.address.label)
                          // setLat(r.position.lat);
                          // setLon(r.position.lng)
                          // setAdd(r.address.label)
                        }}>{r.address.label}</MenuItem>)
                      }
                  
                    </Select>
                     {/* <MDInput type="text" label="Location" variant="standard" onChange={e => setAddress(e.target.value)} fullWidth />
             
    
             <Select label="Select location from the dropdown">
                {response.map(r => 
                <MenuItem 
                onClick={e=> {
                  setLat(r.position.lat);
                  setLon(r.position.lng)
                  setAdd(r.address.label)
                }}>{r.address.label}</MenuItem>)
              }
           
            </Select> */}

                    <MDBox mb={2}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          value={disaster.state}
                        >
                          State
                        </InputLabel>
                        <Select
                          name="state"
                          value={disaster.state}
                          label="state"
                          onChange={onUpdateField}
                          sx={{ padding: "13px" }}
                        >
                          {states.map((value,index) => {
                            return(<MenuItem key={index} value={value}>{value}</MenuItem>)
                          })}
          
                        </Select>
                      </FormControl>
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="district"
                        type="text"
                        label="District"
                        fullWidth
                        value={disaster.district}
                        onChange={onUpdateField}
                      />
                    </MDBox>

                    {/* <MDBox mb={2}>
                      <MDInput
                        name="disasterType"
                        type="text"
                        label="Disaster Type"
                        fullWidth
                        value={disaster.disasterType}
                        onChange={onUpdateField}
                      />
                    </MDBox> */}

            <MDBox mb={2}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          value={disaster.state}
                        >
                          Magnitude
                        </InputLabel> 
                        <Select
                          name="magnitude"
                          value={disaster.magnitude}
                          label="magnitude"
                          onChange={onUpdateField}
                          sx={{ padding: "13px" }}
                        >
                          {magnitudes.map((value,index) => {
                            return(<MenuItem key={index} value={value}>{value}</MenuItem>)
                          })}
          
                        </Select>
                      </FormControl>
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
                        {/* <label htmlFor="raised-button-file">
                          <MDButton
                            size="small"
                            variant="contained"
                            color="dark"
                            component="span"
                          >
                            Add
                          </MDButton>
                        </label> */}
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
