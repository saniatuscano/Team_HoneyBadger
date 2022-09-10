/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-routers components
import { Link } from "react-router-dom";
import React, { useState } from "react";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const volunteers = [
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

function ProfilesList({ title, profiles, shadow }) {
  const [person, setPerson] = React.useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseOver = () => {
    setIsClicked(true);
  };

  const handleMouseOut = () => {
    setIsClicked(false);
  };

  const handleChange = (event) => {
    setPerson(event.target.value);
  };
  const renderProfiles = profiles.map(
    ({ image, name, description, address, verified, timestamp, itemname }) => (
      <MDBox
        key={name}
        component="li"
        display="flex"
        alignItems="center"
        py={1}
        mb={1}
      >
        <MDBox mr={2}>
          <MDAvatar src={image} alt="something here" shadow="md" />
        </MDBox>
        <MDBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          onClick
        >
          <MDTypography variant="button" fontWeight="medium">
            {name}
          </MDTypography>

          <ArrowDropDownIcon />

          <MDTypography variant="caption" color="text">
            {timestamp}
          </MDTypography>

          {isHovering && (
            <Card>
              <CardContent>
                <MDTypography variant="h5" component="div">
                  {itemname}
                </MDTypography>
                <MDBox >
                  <LocationOnIcon />
                  <MDTypography variant="caption" color="text" mb={1}>
                    {address}
                  </MDTypography>
                </MDBox>
                <MDTypography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </MDTypography>
                <MDTypography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </MDTypography>
              </CardContent>
            </Card>
          )}
        </MDBox>
        <MDBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          ml={2}
        >
          <MDTypography variant="caption" color="text"></MDTypography>

          {address ? (
            <MDBox>
              <LocationOnIcon />
              <MDTypography variant="caption" color="text" mb={1}>
                {address}
              </MDTypography>
            </MDBox>
          ) : (
            <MDBox />
          )}
        </MDBox>
        <MDBox ml="auto">
          {/* <TextField
          id="standard-number"
          defaultValue={quantity.value}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        /> */}
        </MDBox>
        {/* <MDBox ml="auto">
        {accept.type === "internal" ? (
          <MDButton component={Link} to={accept.route} variant="text" color="info">
            {accept.label}
          </MDButton>
        ) : (
          <MDButton
            component="a"
            href={accept.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={accept.color}
          >
            {accept.label}
          </MDButton>
        )}
      </MDBox>
      <MDBox ml="auto">
        {reject.type === "internal" ? (
          <MDButton component={Link} to={reject.route} variant="text" color="info">
            {reject.label}
          </MDButton>
        ) : (
          <MDButton
            component="a"
            href={reject.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={reject.color}
          >
            {reject.label}
          </MDButton>
        )}
      </MDBox> */}
      </MDBox>
    )
  );

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
