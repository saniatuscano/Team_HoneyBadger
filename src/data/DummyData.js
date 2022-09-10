
 const data = {
    "arg0": {
        "reportId": "1",
        "supplyType": "Food",
        "campaignId": "1",
        "ngoId": "1",
        "volunteerId": "1",
        "description": "This is a report",
        "priority": 0,
        "items": [
            {
                "item": {
                    "id": "1",
                    "name": "Bannana",
                    "description": "This is the best description",
                    "photo": "This is a link",
                    "futureData": {},
                    "timeStamp": "Thursday, August 25, 2022 6:11:34 AM",
                    "updateDescription": "this is a update description",
                    "quantity": 0
                },
                "avaiablility": true,
                "itemLocation": [
                    {
                        "latitude": 0,
                        "longitude": 0,
                        "address": "Something usefull address",
                        "verfication": [
                            "photo ipfs hash"
                        ],
                        "userId": [
                            "1",
                            "2"
                        ],
                        "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
                        "futureData": {},
                        "updateDescription": "This is a description"
                    }
                ],
                "invoice": "This is a invoice link",
                "status": 0,
                "assignedVolunteers": [
                    "1",
                    "2"
                ],
                "futureData": {},
                "timeStamp": "Thursday, August 25, 2022 6:11:34 AM",
                "updateDescription": "This is update state description"
            }
        ],
        "reportLocation": {
            "latitude": 0,
            "longitude": 0,
            "address": "Something",
            "verfication": [
                "photo ipfs hash code"
            ],
            "userId": [
                "1",
                "2"
            ],
            "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
            "futureData": {},
                        updateDescription : "This is state update data"
        },
        "documents": [
            "This is ipfs hash",
            "This is ipfs hash"
        ],
        "status": false,
        "futureData": {},
        "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
        "updateDescription": "Something will be updated"
    }
}

const disaster = 

{
    "type": "disaster",
    "disasterId": "1",
    "state": "maharashtra",
    "district": "mumbai",
    "locationObj": {
        "latitude": 0,
        "longitude": 0,
        "address": "Something",
        "verfication": [
            "photo ipfs hash code"
        ],
        "userId": [
            "1",
            "2"
        ],
        "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
        "futureData": {},
                        updateDescription : "This is state update data"
    },
    "disasterType": "huricane",
    "magnitude": 10,
    "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
    "active": true,
    "photo": [
        "This is photo link",
        "This is a photo link"
    ],
    "futureData": {},
    "timeStamp": "Thursday, August 25, 2022 6:11:34 AM",
    "updateDescription": "This is about what operation was performed"
}

const campaign =

{
    "type": "campaign",
    "campaignId": "1",
    "disasterId": "1",
    "ngoId": "1",
    "targetAmount": 100,
    "amount": 10,
    "volunteers": [
        "1"
    ],
    "donations": [
        {
            "userId": "1",
            "amount": "10",
            "transactionId": "10101",
            "name": "sdfas",
            "phone": 9029298389,
            "email": "akmore90@gmail.com",
            "futureData": {},
            "timeStamp": "Thursday, August 25, 2022 6:11:34 AM",
            "updateDescription": "This is some updatedescription"
        }
    ],
    "active": true,
    "futureData": {},
    "updateDescription": "We have updated something",
    "timestamp": "Thursday, August 25, 2022 6:11:34 AM"
}


const task_from_demand_report = 
{
    type: "task",
    campaignId : "1",
    "demandReportId": "1",
    taskId : "1",
    vId : "1",
    name : "Buy Bannans",
    locObj : {
        "latitude": 0,
        "longitude": 0,
        "address": "Something",
        "verfication": [
            "photo",
            "photo"
        ],
        "userId": "1",
        "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
        "futureData": {}
    },
    description : "Something is kept on the other side",
    futureData : {},
    completed : true,
    timeStamp : "Thursday, August 25, 2022 6:11:34 AM",
    updateDescription : "Best Descripttion"
}


const simple_task = 
{
    type: "task",
    campaignId : "1",
    "demandReportId": "",
    taskId : "1",
    vId : "1",
    name : "This is a simple task",
    locObj : {
        "latitude": 0,
        "longitude": 0,
        "address": "Something",
        "verfication": [
            "photo"
        ],
        "userId": [
            "1"
        ],
        "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
        "futureData": {},
                    "updateDescription": "This is a state Change Description"
    },
    description : "Some best diresctions",
    futureData : {},
    completed : true,
    timeStamp : "Thursday, August 25, 2022 6:11:34 AM",
    updateDescription : "Best Descripttion"
}

const volunteer_data = 
{
    "type": "Volunteer",
    "userId": "1",
    "name": "Hello World",
    "email": "helloWorld@infura.com",
    "phone": "1234567890",
    "balance": 10,
    "documentHash": [
        "This is one Hash",
        "This is another hash"
    ],
    "authorized": false,
    "location": {
        "latitude": 0,
        "longitude": 0,
        "address": "Something",
        "verfication": [
            "photo"
        ],
        "userId": [
            "1"
        ],
        "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
        "futureData": {},
         "updateDescription": "This is a state Change Description"
    },
    "role": "Field-Volunteer",
    "socialCredit": 10,
    "campaigns": {
        "campaignId": "1",
        "ngoId": "1",
        "timeStamp": "Thursday, August 25, 2022 6:11:34 AM",
        "updateDescription": "Some description"
    },
    "photo": "This is photo link",
    "futureData": {},
    "active": true,
    "timeStamp": "Thursday, August 25, 2022 6:11:34 AM",
    "updateDescription": "This is a description"
}


const inventory_data = 
{
    "id" : "1",
    "name" : "Bannan",
    "description" : "This is a banana",
    "photo" : "This is a photo links",
    "futureData" : {},
    "timeStamp" : "Thursday, August 25, 2022 6:11:34 AM",
    "updateDescription" : "This is a description",
    "quantity" : 10
}

const ngo_data = [
    {
        type: "Ngo",
        "ngoId": "1",
        "name": "Hello World",
        "email": "helloWorld@infura.com",
        "phone": "1234567890",
        "balance": 10,
        documentHash : [
            "This is one Hash",
            "This is another hash"
        ],
        authorized : true,
        location : {
            "latitude": 0,
            "longitude": 0,
            "address": "Something",
            "verfication": [
                "photo"
            ],
            "userId": [
                "1"
            ],
            "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
            "futureData": {},
             "updateDescription": "This is a state Change Description"
        },
        role : "Super User",
        futureData : {},
        active : true,
        timeStamp : "Thursday, August 25, 2022 6:11:34 AM",
        updateDescription : "This is a update Description",
        campagins : [
            "This is one campagin",
            "This is another Campagin"
        ],
    },
    {
        type: "Ngo",
        "ngoId": "1",
        "name": "Hello World",
        "email": "helloWorld@infura.com",
        "phone": "1234567890",
        "balance": 10,
        documentHash : [
            "This is one Hash",
            "This is another hash"
        ],
        authorized : false,
        location : {
            "latitude": 0,
            "longitude": 0,
            "address": "Something",
            "verfication": [
                "photo"
            ],
            "userId": [
                "1"
            ],
            "timestamp": "Thursday, August 25, 2022 6:11:34 AM",
            "futureData": {},
                        "updateDescription": "This is a state Change Description"
        },
        role : "Super User",
        futureData : {},
        active : true,
        timeStamp : "This is a timeStamp",
        updateDescription : "This is a description",
        campagins : [
            "This is one campagin",
            "This is another Campagin"
        ],
    }
    
]

const erc_20 = [
    {
        "to": "1",
        "from": "2",
        "amount": 2000
    },
    
    {
        "to": "2",
        "from": "1",
        "amount": 2000
    }
]

export {data, disaster, ngo_data, campaign, task_from_demand_report,simple_task, volunteer_data, erc_20}

