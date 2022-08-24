// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract Upgrade is UUPSUpgradeable {
  uint8 private test;

  function initialize() external initializer {
    test = 1;
  }

  function isTestTrue() external view returns (bool) {
    return test & 1 != 0;
  }
  
  function _authorizeUpgrade(address) internal override {}
}
