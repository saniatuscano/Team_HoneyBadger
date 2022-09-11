const list =[];
async function main() {
  //compiles
    // const org = await ethers.getContractFactory("ElectionOrganizer");
    const auth = await ethers.getContractFactory("MainChain");

    // Start deployment, returning a promise that resolves to a contract object
    const contract1 = await auth.deploy();   
    await contract1.deployed();
    
    console.log("Contract deployed to address:", contract1.address);

 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });