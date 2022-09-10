// Material Dashboard 2 React Components
import MDInput from "components/MDInput";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TextField from "@mui/material/TextField";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";

const API_KEY = "TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0";

export default function Demand() {
  const [address, setAddress] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const here_api = async () => {
      if (address.length > 0) {
        const res = await axios.get(
          `https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${API_KEY}`
        );
        setResponse(res.data.items);
        console.log(response);
      }
    };
    here_api();
  }, [address]);

  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");

  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [add, setAdd] = useState("");

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
  });

  navigator.geolocation.getCurrentPosition(function (position) {
    setlatitude: position.coords.latitude;
    setlongitude: position.coords.longitude;
  });

  const [items, setItems] = useState([]);

  const valuesTemplate = {
    type: "demandReport",
    reportId: "1",
    supplyType: "Demand Reporting",
    campaignId: "1",
    volunteerId: "1",
    ngoId: "1",

    description: "",
    priority: "",
    // // address: "",
    // // latitude: latitude,
    // // longitude: longitude,
    items: [
      {
        item: {
          id: "1",
          name: "",
          description: "",
          photo: "",
          futureData: {},
          timeStamp: "",
          updateDescription: "",
          quantity: 0,
        },

        avaiablility: true,
        itemLocation: [
          {
            latitude: latitude,
            longitude: longitude,
            address: "",
            verfication: [],
            userId: [],
            timestamp: "",
            futureData: {},
            updateDescription: "",
            verfication: [],
            userId: [],
            timestamp: "",
            futureData: {},
            updateDescription: "",
          },
        ],
        invoice: "",
        status: 0,
        assignedVolunteers: [],
        futureData: {},
        timeStamp: "",
        updateDescription: "",
      },
    ],
    reportLocation: {
      latitude: latitude,
      longitude: longitude,
      address: "",
      verfication: [],
      userId: [],
      timestamp: "",
      futureData: {},
      updateDescription: "",
    },
    documents: [],
    status: false,
    approved: false,
    futureData: {},
    timestamp: "",
    updateDescription: "",
  };

  const [values, setValues] = useState(valuesTemplate);

  const inputFieldsTemplate = [
    {
      itemId: uuid(),
      itemName: "",
      quantity: "",
      address: "",
      latitude: latitude,
      longitude: longitude,
      itemStatus: 0,
    },
  ];
  const [inputFields, setInputFields] = useState(inputFieldsTemplate);

  const handleSubmit1 = (e) => {
    e.preventDefault();
    //[...values].items = inputFields,
    //console.log(values),

    const finalData = {
      ...values,
      items: inputFields,
      //address: response.map((r) => r.address.label),
    };
    console.log(finalData);
    setValues(valuesTemplate);
    setInputFields(inputFieldsTemplate);
    // setValues(finalData);
    // setItems(inputFields)
    // console.log("colin test")
    // console.log(items)
    // console.log("InputFields", inputFields);
  };

  // const onInputChange = (event, value) => {
  //   const addressData = {
  //     ...values,
  //     address: value,

  //   }

  // }

  const handleChangeInput = (itemId, event) => {
    const newInputFields = inputFields.map((i) => {
      if (itemId === i.itemId) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);

    

  };

  const handleChangeInputAddress = (itemId, event) => {
    const newInput = inputFields.map((i) => {
      if (itemId === i.itemId) {
        i[event.target.name] = event.target.value;
        i[inputFields.latitude] = response.position.latitude;
        i[inputFields.longitude] = response.position.longitude;
      }
      return i;
    });

    setInputFields(newInput);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        itemId: uuid(),
        itemName: "",
        quantity: "",
        address: "",
        latitude: "",
        longitude: "",
        itemStatus: 0,
      },
    ]);
  };

  const handleRemoveFields = (itemId) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.itemId === itemId),
      1
    );
    setInputFields(values);
  };

  const onUpdateField = (e) => {
    const nextFormState = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(nextFormState);
  };

  const onUpdateFieldAddress = (e, v) => {
    const nextForm = {
      ...values,
      address: v,
    };
    setValues(nextForm);
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
                  Demand Reporting
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
                  <MDBox mb={2} component="span"></MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      name="description"
                      type="text"
                      label="Description"
                      fullWidth={true}
                      value={values.description}
                      onChange={onUpdateField}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Location"
                      
                      onChange={(e) => setAddress(e.target.value)}
                      fullWidth = {true}
                    />
                    </MDBox>
                    <MDBox mb={2} fullWidth = {true}>
                    <Autocomplete
                      
                      name="address"
                      onChange={handleChangeInputAddress}
                      options={response.map((r) => r.address.label)}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Address" fullWidth />
                      )}
                    />
                  </MDBox>

                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        value={values.priority}
                      >
                        Priority
                      </InputLabel>
                      <Select
                        name="priority"
                        value={values.priority}
                        label="Priority"
                        onChange={onUpdateField}
                        sx={{ padding: "13px" }}
                      >
                        <MenuItem value={0}>Very Low</MenuItem>
                        <MenuItem value={1}>Low</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>High</MenuItem>
                        <MenuItem value={4}>Very High</MenuItem>
                      </Select>
                    </FormControl>
                  </MDBox>

                  <form onSubmit={handleSubmit1}>
                    {inputFields.map((inputField) => (
                      <MDBox key={inputField.itemId} mb={2}>
                        <MDBox
                          pt={3}
                          style={{
                            display: "flex",
                            //justifyContent: "center",
                            justify: "space-between",
                            //alignItems: "center",
                          }}
                        >
                          <MDInput
                            mb={2}
                            ml={2}
                            name="itemName"
                            label="Item Name"
                            type="text"
                            value={inputField.itemName}
                            onChange={(event) =>
                              handleChangeInput(inputField.itemId, event)
                            }
                          />
                            &nbsp;
                            &nbsp;
                            

                          <MDInput
                            mb={2}
                            ml={2}
                            name="quantity"
                            label="Quantity"
                            type="number"
                            value={inputField.quantity}
                            onChange={(event) =>
                              handleChangeInput(inputField.itemId, event)
                            }
                          />
                          {/* <FormControl>
                            <MDBox>
                              <InputLabel value={inputField.itemNameId}>
                                Item Name
                              </InputLabel>
                              <Select
                                name="itemNameId"
                                value={inputField.itemNameId}
                                label="ItemName"
                                onChange={(event) =>
                                  handleChangeInput(inputField.itemId, event)
                                }
                                sx={{ width: "180px", height: "45px" }}
                              >
                                <MenuItem value={0}>Rice</MenuItem>
                                <MenuItem value={1}>Clothes</MenuItem>
                                <MenuItem value={2}>Blankets</MenuItem>
                                <MenuItem value={3}>Wheaeeeeeeeeeeeet</MenuItem>
                                <MenuItem value={4}>Water</MenuItem>
                              </Select>
                            </MDBox>
                          </FormControl> */}
                        </MDBox>

                        <MDBox pt={2}>
                          
                        <MDInput
                          name="latitude"
                          label="Latitude"
                          type="text"
                          disabled="true"
                          value={inputField.latitude}
                          //onChange={(event) =>
                          //  handleChangeInput(inputField.itemId, event)
                          //}
                        />
                        
                        &nbsp;
                            &nbsp;
                        
                        <MDInput
                          
                          padding="10px"
                          name="longitude"
                          label="Longitude"
                          type="text"
                          disabled="true"
                          value={inputField.longitude}
                          //onChange={(event) =>
                          //  handleChangeInput(inputField.itemId, event)
                          //}
                        />
                        
                        
                        </MDBox>

                        <MDBox pt={2}>
                          <MDInput
                            name="address"
                            label="Delivery Address of Item"
                            type="text"
                            value={inputField.address}
                            onChange={(event) =>
                              handleChangeInput(inputField.itemId, event)
                            }
                          />
                        </MDBox>
                        {/* <Autocomplete
                          fullWidth={true}
                          name="address"
                          onChange={(event) =>
                            handleChangeInputAddress(inputField.itemId, event)
                          }
                          options={response.map((r) => r.address.label)}
                          sx={{ width: 300 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Address" fullWidth />
                          )}
                        /> */}
                        <IconButton
                          disabled={inputFields.length === 1}
                          onClick={() => handleRemoveFields(inputField.itemId)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <IconButton onClick={handleAddFields}>
                          <AddIcon />
                        </IconButton>
                      </MDBox>
                    ))}
                    <MDButton
                      variant="contained"
                      color="warning"
                      type="submit"
                      onClick={handleSubmit1}
                    >
                      Submit
                    </MDButton>
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
