import PageLayout from 'examples/LayoutContainers/PageLayout'
import React from 'react'
import {makeStyles} from '@mui/styles';
import {Link} from 'react-router-dom';
import image from '../../../../images/gif.gif'

const useStyles = makeStyles({

page_404: { padding:'40px 0', background:'#fff', fontFamily: 'Arvo'
},

img : { width:'100%'},

four_zero_four_bg : {
 
 backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
    height: '400px',
    backgroundPosition: 'center',
 },
 
 
 four_zero_four_bg_h1 : {
 fontSize:'80px',
 },
 
  four_zero_four_bg_h3 : {
			 fontSize:'80px',
	 },
			 
	link_404 : {			 
	color: '#fff!important',
    padding: '10px 20px',
    background:' #39ac31',
    margin: '20px 0',
    display: 'inline-block'},
	contant_box_404 : { marginTop:'-50px'}
})


const page404 = () => {
  const classes = useStyles();
    return (
    <PageLayout>
        <section className={classes.page_404}>
	<div>
		<div>	
		<div>
		<div >
		<div className={classes.four_zero_four_bg}>
			<h1 className={classes.four_zero_four_bg_h1}>401</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 className={classes.four_zero_four_bg_h3}>
		Look like you're lost
		</h3>
		
		<p> you do not have authorizationfor the page taht you are lookig for</p>
		
		<Link to="/">Go to Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </PageLayout>
  )
}

export default page404