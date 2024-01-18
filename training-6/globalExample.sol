// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19; 

contract GlobalVariableExample { 
event SenderAndValue(address sender, uint value); 
function getSenderAndValue() public payable 
{ 
	address sender = msg.sender; 
	uint value = msg.value; 
	emit SenderAndValue(sender, value); 
} 
}
