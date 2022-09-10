

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useEffect, useState } from "react";
import {readNgo} from '../../apicall/NgoApiCall'
import {ipfsBaseUrl} from '../../services/urls'
import { useParams } from "react-router-dom";

function NgoProfile() {

  // localStorage.setItem('id', "1")
  const ngoId = window.sessionStorage.getItem('ngoId');
  console.log(ngoId)
  const url = '/ngo/read'
  const body = {
    ngoId: ngoId == null ? ngoId: "1"//localStorage.getItem('id')
  }
  console.log(ngoId)

  const dataTemplate = {
    type: "ngo",
    role: 'ngo',
    userId :'',
    name :'',
    email : '',
    phone :'',
    balance: 0,
    location: {
      address:"somewhere"
    },
    documentHash: [],
    photo: '',  
    ngoId: '1',
    authorized: true,
    campaigns: [],
    futureData: null,
    active: true,
  }

  const profilesListDataTemplate = [{
    image: '',
    name: "Document ",
    description: "",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  }]

  const [ngo, setNgo] = useState(dataTemplate);
  const [profilesListData, setProfilesListData] = useState(profilesListDataTemplate);

  useEffect(() => {
    const data = {
      type: "ngo",
      role: 'ngo',
      userId :'1',
      name :'Bharat',
      email : 'bharat@gmail.com',
      phone :'7283928472',
      balance: 0,
      location: {
        address:"Building 103 some place somewhere"
      },
      documentHash: ['QmTCQKkRMndMg8JQWG8gcZsyCwdZTaCvu9nbs7aNd4s5pG'],
      photo: 'QmaDbpzEaVBzdskg7E93wEw69HZdDxvDEX9U4sYjGcf4Hg',  
      ngoId: '1',
      photo: 'QmaDbpzEaVBzdskg7E93wEw69HZdDxvDEX9U4sYjGcf4Hg',
      authorized: true,
      campaigns: [],
      futureData: null,
      active: true,
    }
    setNgo(data)
    setProfilesListData(data.documentHash.map((value, index) => {
      return ({
        image: ipfsBaseUrl + value,
        name: "Document "+ index + 1,
        description: "",
        action: {
          type: "external",
          route: ipfsBaseUrl + value,
          color: "info",
          label: "View",
        },
      })
    }))
    
    // console.log(body)
    // console.log(requests.post(url, body).data)
    //  setNgo(requests.post(url, body))
  },[])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header imgUrl = {ngo.photo} name = {ngo.name}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Description"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  userId: ngo.userId,
                  mobile: ngo.phone,
                  email: ngo.email,
                  location: ngo.location.address,
                }}
                social={[
                  // {
                  //   link: "https://www.facebook.com",
                  //   icon: <FacebookIcon />,
                  //   color: "facebook",
                  // },
                  // {
                  //   link: "https://twitter.com",
                  //   icon: <TwitterIcon />,
                  //   color: "twitter",
                  // },
                  // {
                  //   link: "https://www.instagram.com",
                  //   icon: <InstagramIcon />,
                  //   color: "instagram",
                  // },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox> */}
      </Header>
      
    </DashboardLayout>
  );
}

export default NgoProfile;
