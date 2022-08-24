// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract Base is UUPSUpgradeable {
  bool private test;

  function initialize() external initializer {
    test = true;
  }

  function isTestTrue() external view returns (bool) {
    return test;
  }
  
  function _authorizeUpgrade(address) internal override {}
}
