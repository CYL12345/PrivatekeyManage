🔐 Encrypted Wallet Sharding System on Blockchain
A decentralized wallet encryption and sharding system using Hardhat, Reach, IPFS, and cryptographic key derivation.

📌 项目简介
本项目是一个基于 Ethereum Hardhat 和 Reach 框架构建的去中心化钱包加密与分片系统。用户通过输入账号和密码生成钱包后，私钥将通过密码和随机盐值进行加密，随后被分片上传至 IPFS。最终的分片 CID 会被组合为 JSON 文件再次上传至 IPFS，并将其最终 CID 上传至链上。该 CID 也会使用密钥加密，用户后续只需输入密码和临时盐值即可验证密码是否正确并解密数据。

🧠 技术架构概览
前端技术栈
React.js / Next.js（可选）
Web3.js / Ethers.js
Reach Framework（用于编写 DApp 合约逻辑）
后端与链上技术栈
Hardhat（用于本地开发与部署）
Solidity（智能合约）
IPFS（分布式存储）
Node.js（辅助服务，如加密、上传等）
安全机制
PBKDF2 密钥派生算法
AES-256-GCM 加密算法
Salt（盐值）用于防止彩虹表攻击
分片存储（Sharding）增强安全性
🔐 核心功能
1. 用户注册与钱包生成
用户输入用户名和密码
系统生成以太坊钱包（私钥 + 地址）
2. 私钥加密
使用 PBKDF2 算法，基于密码和随机盐值生成加密密钥
使用 AES-256-GCM 对私钥进行加密
3. 分片上传至 IPFS
加密后的私钥被分片处理
每个分片单独上传至 IPFS，获得 CID
所有 CID 组合成 JSON 文件再次上传至 IPFS，获得最终 CID
4. 最终 CID 上链
最终 CID 使用密钥加密后上传至智能合约
用户可通过输入密码 + 临时盐值解密 CID，验证是否匹配
