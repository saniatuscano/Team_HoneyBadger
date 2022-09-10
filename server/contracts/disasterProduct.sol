pragma solidity ^0.4.17;

contract Product {

    struct detail{

        address manager;
        uint costOfProduct;
        string description;
        mapping(address => bool) buyers;
        uint256 buyerCount;
        address ngo;
        address shopkeeper;
        address volunteer;
        string status;
        uint256 time;
    }
    detail public product;

    modifier restricted() {
        require(msg.sender == product.manager);
        _;
    }

    constructor(string _description, uint budget, address creator) public {
        product.manager = creator;
        product.costOfProduct = budget;
        product.description = _description;
        product.time = block.timestamp;
        product.ngo = creator;
        product.status = "created";
    }
    function() payable{
}
    function setShopkeeper(address _address) public {
        product.shopkeeper = _address;
    }
    function setVolunteer(address _address) public {
        product.volunteer = _address;
    }
    function updateStatus(string status) public {
        product.status = status;
        product.time = now;
    }

    function acceptOrder() public {
        updateStatus("accepted");
        setShopkeeper(msg.sender);
    }

    function buy() public {
        require(keccak256(abi.encodePacked((product.status))) == keccak256(abi.encodePacked(("shipped"))), "Status incorrect!");
        // require(msg.value >= product.costOfProduct, "Value incorrect");
        
        product.shopkeeper.transfer(address(this).balance);
        setVolunteer(msg.sender);
        // product.buyers[msg.sender] = true;
        // product.buyerCount++;
    }
    function getSummary()
        public
        view
        
        returns (
            address, uint256, string, uint256, address, address, address, string, uint256
            
        )
    {
        return (product.manager, product.costOfProduct, product.description, product.buyerCount, product.ngo, product.shopkeeper, product.volunteer, product.status, product.time);
    }
}
