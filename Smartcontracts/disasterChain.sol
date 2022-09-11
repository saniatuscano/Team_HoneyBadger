// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;
import './disasterProduct.sol';

contract MainChain {
    uint256 public userId = 0;

    // struct UserAuth {
    //     address publicAddress;
    //     string role;
    // }

    // mapping(uint256 => UserAuth) public Users;
    mapping(address => address[]) public individualChains;
    address[] public deployedChain;

    function createChain(string memory _description, uint budget) public payable {
        address newChain = address(new Product(_description, budget,  msg.sender));
        payable(address(newChain)).transfer(msg.value);
        deployedChain.push(newChain);
        individualChains[  msg.sender].push(newChain);
    }

    function getDeployedChains() public view returns (address[] memory) {
        return deployedChain;
    }
    function getOwnChains(address _publicAddress) public view returns (address[] memory) {
        return individualChains[_publicAddress];
    }

    // event userCreated(UserAuth user);
    // function isRegistered(address _publicAddress)
    //     public
    //     view
    //     returns (uint256[2] memory)
    // {
    //     uint256[2] memory result = [uint256(0), uint256(0)];
    //     for (uint256 i = 0; i < userId; i++) {
    //         if (_publicAddress == Users[i].publicAddress) {
    //             result[0] = 1;
    //             result[1] = i;
    //             return result;
    //         }
    //     }
    //     return result;
    // }

    // function checkUser(address _publicAddress) public view returns (string) {
    //     require((isRegistered(_publicAddress))[0] == 1, "User not registered!");
    //     for (uint256 i = 0; i < userId; i++) {
    //         if (_publicAddress == Users[i].publicAddress) {
    //             return Users[i].role;
    //         }
    //     }
    // }

    // function createUser(string memory role) public {
    //     require((isRegistered(msg.sender))[0] == 0, "User already registered!");
    //     // User user = new User(userId, name, msg.sender);
    //     Users[userId] = UserAuth(msg.sender, role);
    //     // emit userCreated(Users[userId]);
    //     userId++;
    // }

    
}

