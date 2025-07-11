import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  paths:{
    artifacts:"/Users/chenyilong/ElonWallet/artifacts",// ABI 输出到前端目录[2](@ref)
  },
  networks:{
    localhost:{url:"http://127.0.0.1:8545", chainId: 31337 }  // 本地网络配置[2,7](@ref)
  },
  typechain:{
    outDir:"typechain-types",
    target:"ethers-v6",
  }
};

export default config;
