import React,{useState} from 'react'
import image from '../../../assets/images/kerala.jpg'
import {
  Button,
  Avatar,
  Grid,Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,TextField,
  Tab,Box, Typography} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios'
import {makeStyles} from '@mui/styles';
import Carousel from 'better-react-carousel'
import PageLayout from 'examples/LayoutContainers/PageLayout';
import Navbar from './Navbar';
import MDButton from 'components/MDButton';
import MDBox from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import MDInput from "components/MDInput";
import { Link } from 'react-router-dom';

function loadScript(src) {
  return new Promise((resolve) => {
   const script = document.createElement('script')
   script.src = src
  
   script.onload = () => {
     resolve(true)
   } 
   script.onerror = () => {
     resolve(false)
   }
   document.body.appendChild(script)
  })
   
   
 }

const useStyles = makeStyles(theme => ({
  colorPrimary: {
    backgroundColor: '#F6F6F6',
  },
  barColorPrimary: {
    backgroundColor: '#f89c37',
  },
  image : {
    backgroundSize:'contain',
    [theme.breakpoints.down('lg')]:{
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
   

    },
    borderRadius:'1.3em'
  },
    
countdownWrap :  {
  width: '100%',
  //border: 1px solid black;
  padding: '20px',
  
  maxWidth: '650px',
  margin: '50px auto 50px',
},

goal : {
  fontSize: '38px',
  textAlign: 'right',
  color: '#000',
  // @media only screen and (max-width : 640px) {
  //   text-align: center;  
  // }
  
},

glass  : {
  width: '100%',
  background: 'lightGrey',
  borderRadius: '10px',
  float: 'left',
  overflow: 'hidden',
},

progress : {
  float: 'left',
  width: '16%',
  height: '20px',
  background: '#f89c37',
  zIndex: '333',
  //border-radius: 5px;
},

goalStat :  {
  width: '25%',
  //height: 30px;
  padding: '10px',
  float: 'left',
  margin: 0,
  color: '#000',
  
//   @media only screen and (max-width : 640px) {
//     width: 50%;
//     text-align: center;
//   }
},

goalLabel :  {
  display: 'block',
},
goalNumber: {
  display: 'block',
  fontWeight: 'bold',
},
button : {
  width : '100%',
  background : '#f89c37',
  height : '4em',
  marginTop : 20,
  borderRadius : '1em',
  fontWeight : 600,
 
  color: '#222222'
},
tabPanel : {
  background:'#DEDEDE',
  margin : 20,
  borderRadius : '1.3em',
  lineHeight:'1.6em',
  fontWeight: 400
},

}))

const Campaign = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('1');
  const [showDialog, setShowDialog] = useState(false)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  
  const openDialog = () => setShowDialog(true)
  const closeDialog = () => setShowDialog(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function displayRazorpay()  {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
      alert('Razorpay SDK failed to load')
      return
    }

    const data =await  axios.post('http://localhost:7000/razorpay',{amount : amount})

    const options = {
      "key": "rzp_test_g63GCVx3DuZ1Fh", 
      "amount": data.data.amount.toString(), 
      "currency": data.currency,
      "name": "Donate to campaign",
      "description": "Thank you for donating",
      "image": "https://example.com/your_logo",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
        },
        "theme": {
          "color": "#f89c37"
     
      },
      "prefill": {
          "name": name,
          "email": email,
          "contact": contact
      }
  };
  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
  }

  const submitForm = (e) => {
    e.preventDefault();
    closeDialog();
    displayRazorpay();
    setAmount('');
    setName('');
    setEmail('');
    setContact('')
  }

 
 

  return (
    <PageLayout>
        <Navbar />
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <Carousel>
        <Carousel.Item>
        <img src={image} alt="Image here"  className={classes.image} />
        </Carousel.Item>
        
        <Carousel.Item>
        <img src={image} alt="Image here"  className={classes.image} />
        </Carousel.Item>
        

        <Carousel.Item>
        <img src={image} alt="Image here"  className={classes.image} />
        </Carousel.Item>
        

        <Carousel.Item>
        <img src={image} alt="Image here"  className={classes.image} />
        </Carousel.Item>
        
        
        </Carousel>
        {/* <img src={image} alt="Image here"  className={classes.image} /> */}
        </Grid>
        <Grid item xs={12} md={6}>
       
        <div className = {classes.countdownWrap}>
        <MDTypography variant="h3" >Kerala Floods</MDTypography>
  <div className = {classes.goal}>Rs 10,000</div>
  <div className={classes.glass}>
    <div className={classes.progress}>
    </div>
  </div>
  <div className={classes.goalStat}>
    <span className={classes.goalNumber}>16%</span>
    <span className={classes.goalLabel}>Funded</span>
  </div>
  <div className={classes.goalStat}>
    <span className={classes.goalNumber}>Rs 1,640</span>
    <span className={classes.goalLabel}>Raised</span>
  </div>
  <div className={classes.goalStat}>
    <span className={classes.goalNumber}>38</span>
    <span className={classes.goalLabel}>Sponsors</span>
  </div>
  <div>
    <MDButton className={classes.button} onClick={openDialog}>DONATE</MDButton>
    <MDButton className={classes.button}><Link to='/authentication/sign-up/volunteer' style={{color:"#222222"}}>BECOME A VOLUNTEER</Link></MDButton>
  </div>
</div>
 
        </Grid>


        <Grid item>
        <Box>
      <TabContext value={value}>
        <Box>
          <TabList 
            onChange={handleChange} 
            className = {classes.tab}>
            <Tab label="OVERVIEW" value="1" />
            <Tab label="ABOUT NGO" value="2" />
            <Tab label="UPDATES" value="3" />
          </TabList>
        </Box>
        <TabPanel className= {classes.tabPanel} value="1"><ul><li>Severe floods has affected the south Indian state Kerala, due to unusually high rainfall during the monsoon season.</li>
        <li> It was the worst flood in Kerala in nearly a century.Over 483 people died, and 15 are missing.</li>
        <li>About a million people were evacuated, mainly from Chengannur,Pandanad, Edanad, Aranmula, Kozhencherry, Ayiroor, Ranni, Pandalam, Kuttanad, Malappuram, Aluva, Chalakudy, Thrissur, Thiruvalla, Eraviperoor, Vallamkulam, North Paravur, Chellanam, Vypin Island and Palakkad.</li>
        <li>All 14 districts of the state were placed on red alert.According to the Kerala government, one-sixth of the total population of Kerala had been directly affected by the floods and related incidents.</li></ul>
         </TabPanel>
        <TabPanel className= {classes.tabPanel} value="2">
          <ul>
            <li>
            As per Section 3.4.5 of National Policy on Disaster Management 2009, the State Governments are required to raise their own SDRF for quickly responding to disasters.
            </li>
            <li>
            As per information available, 24 State/UTs have raised their SDRF. These SDRF are placed strategically at suitable locations well connected to the airport, rail heads and roads for their immediate deployment at the disaster sites.
            </li>
            <li>
            The SDRF are also be used for Community Capacity Building and Awareness Generation programmes within the State. During these programmes, SDRF can familiarize themselves with terrain, critical buildings and other existing infrastructure for prompt responses at the time of disasters and simultaneously work with the community, including school children, village volunteers and other stakeholders on what to do during disasters
            </li>
          </ul>
        </TabPanel>
        <TabPanel className= {classes.tabPanel} value="3">
          <ul>
            <li>About Rs.1500 have been received through this campaigns.
            </li>
            <li>The volunteers are working on the site and reporting the demands of the people.
              </li>
              <li>Around 50 medical kits ,food and several other equipments were distributed to the people.
                </li></ul>
           </TabPanel>
      </TabContext>
    </Box>
        </Grid>
      </Grid>
  
   

  </div>

  <Dialog open={showDialog} onClose={closeDialog} disableBackdropClick>
        <Box >
          <DialogTitle>Donate</DialogTitle>
          <DialogContent dividers style={{ width: '500px', height: '370px' }}>
          <MDBox mb={2}>
                      <MDInput
                        name="amount"
                        type="text"
                        label="Amount"
                        fullWidth
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                      />
                    </MDBox>
          <MDBox mb={2}>
                      <MDInput
                        name="name"
                        type="text"
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="email"
                        type="text"
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </MDBox>

                    <MDBox mb={2}>
                      <MDInput
                        name="contact"
                        type="number"
                        label="Contact No"
                        fullWidth
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                      />
                    </MDBox>

                   
            
          </DialogContent>
          <DialogActions>
            <MDButton size="small" variant="contained"  color="dark" component="span"  onClick={submitForm}>
              SUBMIT
            </MDButton>
            <MDButton  onClick={closeDialog}>
              CANCEL
            </MDButton>
          </DialogActions>
        </Box>
      </Dialog>
  </PageLayout>
  )
}

export default Campaign
