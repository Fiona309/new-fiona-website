<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1isIawcoW7_xsAnVqPBAuKY1-mJ2c3RKW

## Run Locally

**Prerequisites:**  Node.js (如果未安装，请访问 https://nodejs.org/ 下载安装)

### 如何运行项目

1. **安装依赖**（首次运行需要）:
   ```bash
   npm install
   ```

2. **启动开发服务器**:
   ```bash
   npm run dev
   ```

3. **在浏览器中打开**:
   启动后，终端会显示类似 `http://localhost:3000` 的地址，在浏览器中打开该地址即可查看网站。

### ⚠️ 重要提示

- **不要直接双击打开 `index.html` 文件**，这样会显示空白页面
- 必须使用 `npm run dev` 启动开发服务器
- 如果看到空白页面，请检查：
  1. 是否已安装 Node.js（运行 `node --version` 检查）
  2. 是否已运行 `npm install` 安装依赖
  3. 是否已运行 `npm run dev` 启动服务器
