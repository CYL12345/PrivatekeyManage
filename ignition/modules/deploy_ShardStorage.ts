import { ethers } from "hardhat";

async function main() {
    const ShardStorage = await ethers.getContractFactory("ShardStorage");
    console.log("deploying ShardStorage...");
    const shardStorage = await ShardStorage.deploy();
    await shardStorage.deploymentTransaction();
    const address =await shardStorage.getAddress()
    console.log(`ShardStorage deployed to: ${address}`);
}

main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });