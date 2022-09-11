const Razorpay = require('razorpay')
const express = require('express')
const shortid = require('shortid')
const app = express()
const port = 7000

const razorpay = new Razorpay({
    key_id : 'rzp_test_g63GCVx3DuZ1Fh',
    key_secret : 'gLRMstYc01pKp8L9QmWCKuDB'
})

const cors = require('cors')

app.use(cors());
app.use(express.json());


app.post('/razorpay', async (req,res) => {
    const payment_capture =  1;
    const amount = parseInt(req.body.amount);
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

    try {
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id : response.id,
            currency : response.currency,
            amount : response.amount
        })
    } catch (error) {
        console.log(error)
    }
})



app.listen(port, 
    console.log(`Server running on PORT ${port}..`));