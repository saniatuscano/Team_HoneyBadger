import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, IconButton, Toolbar, Collapse ,Button,Fade} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import {Link} from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MDButton from 'components/MDButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
    
  },
  appbar: {
    // background: 'none',
    backgroundColor:"#222222"
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  appbarContent: {
    float: 'left',
    margin: '5px'

  },
  icon: {
    color: '#f89c37',
    fontSize: '2rem',
  },
  colorText: {
    color: '#F89C37',
    
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#F89C37',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  
  function getCookie(user) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(user == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

useEffect(()=>{
  console.log(getCookie('username'))
},[])
  
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h2 className={classes.appbarTitle}>
            <span className={classes.colorText}><Link to='/' style={{color:'#f89c37'}}>Infura</Link></span>
          </h2>
          <h4 className={classes.appbarContent}>
            <span className={classes.colorText}><Link to='/Campaigns' style={{color:'#f89c37'}}>Donate</Link></span>
          </h4>
          <h4 className={classes.appbarContent}>
            
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <MDButton {...bindTrigger(popupState)} className={classes.colorText}>
           Register
          </MDButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link to='/authentication/sign-up/volunteer'>Volunteer</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to='/authentication/sign-up/ngo'>NGO</Link></MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState></h4>
    <h4>
    <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <MDButton {...bindTrigger(popupState)} className={classes.colorText}>
        login
      </MDButton>
      <Menu {...bindMenu(popupState)}>
        {
          getCookie('username')==null && <MenuItem onClick={popupState.close}><Link to='/sign-in/vol'> Volunteer login</Link></MenuItem>
        }
        {
          getCookie('username')==null && <MenuItem onClick={popupState.close}><Link to='/sign-in/ngo'>Organisation login</Link></MenuItem>
        }
        {
        getCookie('username') &&
        <MenuItem onClick={ e=>{
          popupState.close
          Cookies.remove('jwt_token');
          Cookies.remove('username')
          navigate('/');
        }
          
        }>Logout</MenuItem>
       }
         
       
      </Menu>
    </React.Fragment>
  )}
</PopupState>
          </h4>
          
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            We <span className={classes.colorText}>Help </span>Each Other<br />
          </h1>
          
            <Link to='/masio'><MDButton >View Map</MDButton></Link>
          <br/>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
