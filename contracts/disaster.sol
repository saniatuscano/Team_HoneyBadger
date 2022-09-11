// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.0;

contract Disaster{
    address public owner;

    struct Organisation{
        uint org_id;
        string name;
        string email;
        string password;
        string doc_hash;
        uint phone_no;
        string location;
        bool status;
        address author;
 }

    struct Volunteer{
        uint vol_id;
        string location;
        string name;
        string email;
        uint phone_no;
        address vol_address;
     
     }


    struct Campaign{
         uint camp_id;
         uint org_id;
         uint targetAmount;
         uint amountRaised;
         string name;
         string description;
     }


    Campaign[] public campaigns;
    Volunteer[] public volunteers;
    Organisation[] public organisations;
   

    //function to register organisation
    function addOrg(string memory _name, string memory _email, string memory _password, uint phoneNo, string memory _location, string memory _docHash) public returns(bool){ 
        organisations.length++;
        Organisation storage c = organisations[organisations.length - 1];
        c.org_id = organisations.length - 1;
        c.author = msg.sender;
        c.status = false;
        c.name = _name;
        c.email = _email;
        c.password = _password;
        c.phone_no  = phoneNo;
        c.location = _location;
        c.doc_hash = _docHash;
        return true;

    }

    //function to register volunteer
    function addVol( string memory _location, string memory _name, string memory _email, uint _phone_no) public returns(bool){
        volunteers.length++;
        Volunteer storage v = volunteers[volunteers.length - 1];
        v.vol_id = volunteers.length - 1;
        v.location = _location;
        v.name = _name;
        v.email = _email;
        v.phone_no = _phone_no;
        v.vol_address = msg.sender;
        return true;

    }

    //function to create a campaign 
    function createCampaign(uint _orgId, uint _targetAmount, uint _amountRaised, string memory _name,string memory _description) public returns(bool){
        campaigns.length++;
        Campaign storage c = campaigns[campaigns.length - 1];
        c.camp_id = campaigns.length - 1;
        c.org_id = _orgId;
        c.targetAmount = _targetAmount;
        c.amountRaised = _amountRaised;
        c.name = _name;
        c.description = _description;
        return true;
    }
   
   //function to approve orgaisation
   function approveOrg(uint org_id) public{
       Organisation storage o = organisations[org_id] ;
       o.status = true;
   }

   //function to check of organisation is approved or not
   function checkOrgStatus(uint org_id) public view returns(bool){
       Organisation storage o = organisations[org_id] ;
       return o.status;
   }

   //function to get organisation count 
   function getAOrgCount() public view returns(uint) {
       return organisations.length;
   }

   //function to get Volunteer count
   function getVolunteerCount() public view returns(uint){
       return volunteers.length;
   }

   //function to get Campaign count
   function getCampaignCount() public view returns(uint){
       return campaigns.length;
   }

    function getOrg(uint orgId) public view returns(uint, address,bool, string memory, string memory, string memory, 
    uint,string memory, string memory ) {
       Organisation storage c = organisations[orgId];
       return (c.org_id,
        c.author,
        c.status,
        c.name ,
        c.email,
        c.password,
        c.phone_no ,
        c.location,
        c.doc_hash);
    }

    function getVol(uint volId) public view returns(uint,string memory , string memory, string memory, uint , address  ) {
       Volunteer storage v = volunteers[volId];
       return (  v.vol_id,v.location,v.name ,v.email, v.phone_no,v.vol_address);
    }

    function getCamp(uint campId) public view returns(uint,uint,uint, uint,string memory , string memory) {
       Campaign storage c = campaigns[campId];
       return ( c.camp_id,c.org_id, c.targetAmount , c.amountRaised , c.name,c.description );
    }

    //function to login organisation
    function loginOrg(string memory _email,string memory _password ) public view returns(bool){
        
        bool flag = false;
        for(uint i=0; i<organisations.length; i++){
          if(keccak256(bytes(organisations[i].email)) == keccak256(bytes(_email)) && keccak256(bytes(organisations[i].password)) == keccak256(bytes(_password)))flag=true;
        }
        return flag;
    }
  

 
 



}