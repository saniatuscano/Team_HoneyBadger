

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";

import Profile from "layouts/profile";

import SignUp from "layouts/authentication/sign-up";
import VolDashboard from "Volunteer/dashboard";
import VolunteerProfile from "Volunteer/profile";
import Forms from "Volunteer/Forms";
import Leaderboard from "Volunteer/Leaderboard";
import Home from "layouts/home";
import VolTables from "Volunteer/tables";
import Tables from "Volunteer/Ctasks";
import DisasterReport from 'layouts/authentication/DisasterReport';

// @mui icons
import Icon from "@mui/material/Icon";
import Campaign from "layouts/home/components/Campaign";
import Campaigns from "layouts/home/components/Campaigns";
import Map from "layouts/home/components/Map";
import Volunteer from "layouts/authentication/sign-up/volunteer";
import NGO from "layouts/authentication/sign-up/ngo";
import Report from "Volunteer/Report";
import Demand from "Volunteer/Demand";
import ReportDisasterNgo from 'NGO/components/ReportDisasterNgo'
import SigninVol from 'layouts/authentication/sign-in/volunteer';
import SigninNgo from 'layouts/authentication/sign-in/ngo';
import NgoDashboard from 'NGO/components/NgoDashboard'
import VerifyVolunteers from 'NGO/components/VerifyVolunteers'
import SupplyChain from 'NGO/components/SupplyChain'
import ItemDetails from 'NGO/components/ItemDetails'
import DemandReports from 'NGO/components/DemandReports'
import NgoTable from 'layouts/tables'
import VolunteersTable from 'layouts/VolunteersTable'
import VerifyVolunteersAdmin from 'layouts/VerifyVolunteersAdmin'
import VerifyNgo from 'layouts/VerifyNgo'
import CampaignDetails from 'NGO/components/CampaignDetails'
import CampaignInfo from 'layouts/Campaign Details';
import ItemStatus from "NGO/components/ItemStatus";
import CreateCampaign from 'NGO/components/CreateCampaign';
import AddInventory from 'layouts/AddInventory'
import Page404 from './layouts/authentication/components/page404/page404'
import Maps from './layouts/Map'

import NgoProfile from "layouts/profile";
import VolunteerTable from './layouts/VolunteerTable'
import Tracking from 'NGO/components/Tracking'
import SupplyChainStatus from 'NGO/components/SupplyChainStatus'
import Transfer from 'layouts/Transfer'
import TransferMode from 'layouts/TransferMode'
import TransferHistory from 'layouts/TransferHistory'
import VerificationLink from 'layouts/VerificationLink'
import { DisplayMap } from "layouts/DisplayMap";
export const common_routes=[
  {
    key: "sign-up",
    route: "/authentication/sign-up/volunteer",
    component: <Volunteer />,
  },
  {
    key: "sign-up",
    route: "/authentication/sign-up/ngo",
    component: <NGO />,
  },
  {

    key:'sign-in',
    route:'/sign-in/vol',
    component:< SigninVol/>
  },
  {

    key:'sign-in',
    route:'/sign-in/ngo',
    component:< SigninNgo/>
  },
  {
    key: "home",
    route: "/authentication/home",
    component: <Home />,
  },
  {
    key: "Campaign",
    route: "/Campaign",
    component: <Campaign />,
  },
  {
    key: "campaigns",
    route: "/campaigns",
    component: <Campaigns />,
  },
  {
    key: "page404",
    route: "*",
    component: <Page404 />,
  },

{
  key:'masio',
  route:'/masio',
  component:<DisplayMap/>
},
//ngo routes

]

export const routes_admin = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
 
  {
    type: "collapse",
    name: "Ngo Table",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/ngo_tables",
    component: <NgoTable type='ngo'/>,
  },
  
  {
    type: "collapse",
    name: "Volunteer Table",
    key: "vol table",
    icon: <Icon fontSize="small">table</Icon>,
    route: "/voltable",
    component: <VolunteerTable />,

  },
 
  {
    type: "collapse",
    name: "Report",
    key: "report",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/report",
    component: <DisasterReport />,
  },
  
  // {
  //   type: "collapse",
  //   name: "Verify Volunteers",
  //   key: "verify vol",
  //   icon: <Icon fontSize="small">check</Icon>,
  //   route: "/verifyvol",
  //   component: <VerifyVolunteersAdmin />,


  // },
  // {
  //   type: "collapse",
  //   name: "Verify Ngo",
  //   key: "verify ngo",
  //   icon: <Icon fontSize="small">check</Icon>,
  //   route: "/verifyngo",
  //   component: <VerifyNgo />,
  // },
  {
    type: "collapse",
    name: "Campaign details",
    key: "campaign",
    icon: <Icon fontSize="small">check</Icon>,
    route: "/campaign_details",
    component: <CampaignInfo/>,
  },
 

];
export const routes_vol = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "voldashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/Volunteer/dashboard",
    component: <VolDashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Tasks",
  //   key: "voltables",
  //   icon: <Icon fontSize="small">task</Icon>,
  //   route: "/Volunteer/vol-tables",
  //   component: <VolTables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Completed Tasks",
  //   key: "voltables",
  //   icon: <Icon fontSize="small">task</Icon>,
  //   route: "/Volunteer/CompletedTasks",
  //   component: <Tables />,
  // },
  {
    type: "collapse",
    name: "Leaderboard",
    key: "Leaderboard",
    icon: <Icon fontSize="small">leaderboard</Icon>,
    route: "/Volunteer/Leaderboard",
    component: <Leaderboard />,
  },
  {
    type: "collapse",
    name: "Report",
    key: "Report",
    icon: <Icon fontSize="small">receipt_small</Icon>,
    route: "/Volunteer/Report",
    component: <Report />,
  },
  {
    type: "collapse",
    name: "Demand Reporting",
    key: "Demand",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/Volunteer/Demand",
    component: <Demand />,

  },
  {
    type: "collapse",
    name: "Profile",
    key: "Profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/Volunteer/Profile",
    component: <VolunteerProfile />,
  },

];
export const routes_ngo = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "ngodashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/ngo/dashboard",
    component: <NgoDashboard />,
  },
  {
    
    name: "Item Details",
    key: "Item Details",
    icon: <Icon fontSize="small">details</Icon>,
    route: "/ngo/item-details",
    component: <ItemDetails/>
  },
  {
    type: "collapse",
    name: "Report Disasters",
    key: "report",
    icon: <Icon fontSize="small">report</Icon>,
    route: "/ngo/report",
    component: <ReportDisasterNgo />,
  },
  // {
  //   type:'collapse',
  //   name: "profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/ngo/profile",
  //   component: <NgoProfile/>
  // },
  {
    type: "collapse",
    name: "Verify Volunteers",
    key: "verify",
    icon: <Icon fontSize="small">check</Icon>,
    route: "/ngo/verify",
    component: <VerifyVolunteers />,
  },
 
  // {
  //   type: "collapse",
  //   name: "Demand Report details",
  //   key: "supply",
  //   icon: <Icon fontSize="small">details</Icon>,
  //   route: "/ngo/reportDetails",
  //   component: <SupplyChain />,
  // },
  {
    type: "collapse",
    name: "demand reports",
    key: "demand",
    icon: <Icon fontSize="small">report</Icon>,
    route: "/ngo/demand",
    component: <DemandReports />,
  },
  // {
  //   type: "collapse",
  //   name: "Create report",
  //   key: "DemandReport",
  //   icon: <Icon fontSize="small">report</Icon>,
  //   route: "/ngo/createdemandreport",
  //   component: <Demand />,
  // },

  // {
  //   type: "collapse",
  //   name: "Tasks",
  //   key: "tasks",
  //   icon: <Icon fontSize="small">report</Icon>,
  //   route: "/ngo/campaign",
  //   component: <CampaignDetails/>
  // },
  {
    type: "collapse",
    name: "Item status",
    key: "itemStatus",
    icon: <Icon fontSize="small">report</Icon>,
    route: "/ngo/itemStatus",
    component: <ItemStatus/>
  },
  {
    type:'collapse',
    name: "create campaign",
    key: "create campaign",
    icon: <Icon fontSize="small">report</Icon>,
    route: "/ngo/campaigncreate",
    component: <CreateCampaign/>
  },
  {
    
    name: "Tracking",
    key: "Tracking",
    icon: <Icon fontSize="small">details</Icon>,
    route: "/ngo/Tracking",
    component: <Tracking/>
  },
  {
    type:'collapse',
    name: "status",
    key: "Tracking",
    icon: <Icon fontSize="small">details</Icon>,
    route: "/ngo/status",
    component: <SupplyChainStatus/>
  },
  


];
