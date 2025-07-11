---

# 🔐 Encrypted Wallet Sharding System on Blockchain

> **A decentralized wallet encryption and sharding system using Hardhat, Reach, IPFS, and cryptographic key derivation.**

---

## 📌 项目简介

本项目是一个基于 **Ethereum Hardhat** 和 **Reach** 框架构建的去中心化钱包加密与分片系统。用户通过输入账号和密码生成钱包后，私钥将通过密码和随机盐值进行加密，随后被分片上传至 **IPFS**。最终的分片 CID 会被组合为 JSON 文件再次上传至 IPFS，并将其最终 CID 上传至链上。该 CID 也会使用密钥加密，用户后续只需输入密码和临时盐值即可验证密码是否正确并解密数据。

---

## 🧠 技术架构概览

### 前端技术栈
- **React.js / Next.js**（可选）
- **Web3.js / Ethers.js**
- **Reach Framework**（用于编写 DApp 合约逻辑）

### 后端与链上技术栈
- **Hardhat**（用于本地开发与部署）
- **Solidity**（智能合约）
- **IPFS**（分布式存储）
- **Node.js**（辅助服务，如加密、上传等）

### 安全机制
- **PBKDF2** 密钥派生算法
- **AES-256-GCM** 加密算法
- **Salt**（盐值）用于防止彩虹表攻击
- **分片存储**（Sharding）增强安全性

---

## 🔐 核心功能

### 1. 用户注册与钱包生成
- 用户输入用户名和密码
- 系统生成以太坊钱包（私钥 + 地址）

### 2. 私钥加密
- 使用 PBKDF2 算法，基于密码和随机盐值生成加密密钥
- 使用 AES-256-GCM 对私钥进行加密

### 3. 分片上传至 IPFS
- 加密后的私钥被分片处理
- 每个分片单独上传至 IPFS，获得 CID
- 所有 CID 组合成 JSON 文件再次上传至 IPFS，获得最终 CID

### 4. 最终 CID 上链
- 最终 CID 使用密钥加密后上传至智能合约
- 用户可通过输入密码 + 临时盐值解密 CID，验证是否匹配

---

## 🧩 智能合约结构（Reach）

```javascript
// Reach Contract 示例（简化版）
export const main = Reach.App(() => {
  const User = Participant('User', {
    submitCID: Fun([Bytes], Null),
    verifyPassword: Fun([String, Bytes], Bool),
  });

  init();

  User.only(() => {
    const encryptedCID = declassify(interact.submitCID(finalCID));
  });

  User.interact.verifyPassword(password, salt);
});
```

---

## 📁 项目结构

```
.
├── contracts/               # Solidity 合约
├── scripts/                 # Hardhat 部署脚本
├── src/                     # 前端代码
│   ├── components/          # React 组件
│   ├── utils/               # 加密、IPFS 上传等工具
│   └── App.js               # 主应用入口
├── ipfs/                    # IPFS 上传模块
├── encryption/              # 加密与解密逻辑
├── hardhat.config.js        # Hardhat 配置
└── README.md
```

---

## 🚀 快速启动指南

### 克隆项目

```bash
git clone https://github.com/your-username/encrypted-wallet-sharding.git
cd encrypted-wallet-sharding
```

### 安装依赖

```bash
npm install
```

### 启动 Hardhat 本地节点

```bash
npx hardhat node
```

### 部署智能合约

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 启动前端服务

```bash
npm start
```

---

## 🧪 使用说明

1. 打开网页，输入用户名和密码。
2. 系统自动生成钱包并加密私钥。
3. 分片上传至 IPFS，最终 CID 上链。
4. 用户下次登录只需输入密码和临时盐值即可验证身份并解密数据。

---

## 🔐 安全性说明

- 所有敏感数据（如私钥）在客户端加密后上传，服务端不存储明文。
- 使用 **PBKDF2 + AES-GCM** 提供强加密保障。
- 数据分片上传，即使部分 CID 被泄露，也无法还原原始数据。
- 最终 CID 上链前也经过加密，保证链上数据安全。

---

## 📦 依赖项

- `hardhat`
- `ethers.js`
- `ipfs-http-client`
- `crypto-js` 或 `node:crypto`
- `react`, `axios`, `web3modal`（前端）

---

## 🤝 贡献指南

欢迎提交 Pull Request 或提出 Issue！请确保代码风格统一，遵循 [Conventional Commits](https://www.conventionalcommits.org/) 提交规范。

---

## 📜 License

MIT License

---

## 📬 联系我们

如有问题，请联系 [your-email@example.com](mailto:your-email@example.com)

---

## 📈 未来计划

- 支持多链（Polygon、Arbitrum）
- 集成 DID 和 Decentralized Identity
- 支持恢复密钥（Recovery Phrase）
- 增加 UI/UX 优化和移动端适配

---

> 🛡️ 保护用户隐私，是我们不变的初心。

--- 

如果你需要，我还可以为你生成项目的 `package.json`、`.gitignore`、`LICENSE` 文件，以及详细的部署脚本和智能合约模板。是否需要我继续？
