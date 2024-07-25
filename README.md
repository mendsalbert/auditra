<div align="center">
  <br />
   <a href="https://postimg.cc/G9V5k4bf" title="Project Screenshot" target="_blank">
    <img src="./public/thumbnail.jpg" width="100%" alt="Project Screenshot"/>
  </a>

  <br />

  <div>
    <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logoColor=white&logo=javascript&color=F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/-OpenAI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
  </div>

  <h3 align="center">AuditAI</h3>

  <div align="center">
    AuditAI is an innovative tool designed to leverage the power of AI to audit smart contracts. This project uses the OpenAI API to generate detailed audit reports.
  </div>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. 🔋 [Features](#features)
3. ⚙️ [Architecture](#architecture)
4. 🤸 [Setup and Deployment](#setup-and-deployment)
5. 🚀 [Usage](#usage)
6. 🤝 [Contributing](#contributing)
7. 📜 [License](#license)

## 🤖 Introduction

AuditAI provides an easy and efficient way to audit your smart contracts using AI. It interacts with the OpenAI API to analyze and generate detailed reports on the provided smart contract code.

## 🔋 Features

- **AI-Powered Auditing**: Leverages OpenAI to generate comprehensive audit reports.
- **Command Line Tool**: Provides a CLI for easy integration into development workflows.
- **User-Friendly Interface**: Offers an easy-to-use frontend for auditing smart contracts.

## ⚙️ Architecture

1. **Command Line Tool**: `auditai`
2. **Frontend**: React-based user interface
3. **API Integration**: OpenAI API

## 🤸 Setup and Deployment

### Prerequisites

- Node.js and npm installed

### Steps

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/AuditAI.git
cd AuditAI
```

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**

Create a `.env` file in the root directory with the following content:

```plaintext
OPENAI_API_KEY=your_openai_api_key
```

4. **Build the Project**

```bash
npm run build
```

5. **Install the CLI Globally**

```bash
npm install -g .
```

## 🚀 Usage

### Using the CLI

1. **Analyze a Smart Contract**

```bash
auditai check <path-to-your-contract-file>
```

### Using the Frontend

1. **Start the Frontend**

```bash
npm run dev
```

2. **Connect Wallet**: Connect your MetaMask wallet to the appropriate network.
3. **Submit Contract Code**: Paste your smart contract code into the provided textarea and click "Analyze".
4. **View Results**: After analysis, view the detailed audit report and metrics in the modal that appears.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

This version should display correctly in your README. Adjust any specific details such as image links, repository links, and API keys to match your project.
```
