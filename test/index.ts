import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Base } from "../typechain-types/contracts/Base"
import { Upgrade } from "../typechain-types/contracts/Upgrade"

const deployUUPS = async (contractName: string, initParams: any[] = []) => {
  const CONTRACT = await ethers.getContractFactory(contractName)
  const contract = await upgrades.deployProxy(CONTRACT, initParams, {
    kind: "uups"
  })
  await contract.deployed()

  return contract
}

describe("Upgrade contracts", () => {
  it("Contract upgraded", async () => {
    const base = (await deployUUPS("Base")) as Base

    expect(await base.isTestTrue()).to.be.equal(true)

    const UPGRADE = await ethers.getContractFactory("Upgrade")
    const contractUpgrade = await upgrades.upgradeProxy(base.address, UPGRADE)

    const upgrade = contractUpgrade as Upgrade
    expect(await upgrade.isTestTrue()).to.be.equal(true)
  })
})
