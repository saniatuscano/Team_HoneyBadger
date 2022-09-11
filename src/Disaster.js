import Web3 from 'web3'
import * as DisasterContract from '../client/src/contracts/Disaster.json';
//const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const web3 = new Web3(window.web3.currentProvider);
const abi = DisasterContract.abi;
const address = '0xb6669e114c8e4B17E8c710715a26cfed95ba9b5f';
const Disaster = new web3.eth.Contract(abi, address);
export {Disaster, web3}