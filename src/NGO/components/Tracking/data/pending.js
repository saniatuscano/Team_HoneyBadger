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

// Images
import kal from "assets/images/kal-visuals-square.jpg";
import pending from "assets/images/pending.png"
import confirmed from "assets/images/confirmed.jpg"
import assigned from "assets/images/assigned.png"
import delivered from "assets/images/delivered.png"
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import PendingIcon from '@mui/icons-material/Pending';

export default [
  {
    
    name: "Pending",
    image: pending,
    description: "Your order is yet to be confirmed",
    itemname: "Rice",
    
  },
  {
    
    name: "Confirmed",
    image: confirmed,
    description: "Your order is confirmed ",
    timestamp: Date(),
    itemname: "Rice",
  },
  {
    
    name: "Assigned",
    image: assigned,
    description: "Your order is assigned to respective volunteer",
    address: "Bandra, Mumbai",
    timestamp: Date(),
    itemname: "Rice",
  },
  {
    
    name: "Delivered",
    image: delivered,
    description: "Successfully delivered item to the location.",
    address: "Gandhinagar, Gujarat",
    timestamp: Date(),
    itemname: "Rice",
  },
  
  // {
  //   image: marie,
  //   name: "Anne Marie",
  //   description: "Awesome work, can you..",
  //   action: {
  //     type: "internal",
  //     route: "/pages/profile/profile-overview",
  //     color: "info",
  //     label: "reply",
  //   },
  // },
  // {
  //   image: ivana,
  //   name: "Ivanna",
  //   description: "About files I can..",
  //   action: {
  //     type: "internal",
  //     route: "/pages/profile/profile-overview",
  //     color: "info",
  //     label: "reply",
  //   },
  // },
  // {
  //   image: team4,
  //   name: "Peterson",
  //   description: "Have a great afternoon..",
  //   action: {
  //     type: "internal",
  //     route: "/pages/profile/profile-overview",
  //     color: "info",
  //     label: "reply",
  //   },
  // },
  // {
  //   image: team3,
  //   name: "Nick Daniel",
  //   description: "Hi! I need more information..",
  //   action: {
  //     type: "internal",
  //     route: "/pages/profile/profile-overview",
  //     color: "info",
  //     label: "reply",
  //   },
  // },
];
