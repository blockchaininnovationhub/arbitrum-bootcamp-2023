// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BytesExample {
    bytes1 public byte1Value;
    bytes2 public byte2Value;
  

    function setBytesValues(bytes1 _byte1, bytes2 _byte2) public {
        byte1Value = _byte1;
        byte2Value = _byte2;
    }
}
