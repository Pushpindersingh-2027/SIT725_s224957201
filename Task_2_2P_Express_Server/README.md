# SIT725 Task 2.2P — Express Web Server

## Student
**Name:** Pushpinder Singh  
**Student ID:** S224957201

## Overview

This project demonstrates a simple Node.js and Express web server. It:

- serves a webpage from the `public` folder;
- provides a simple test endpoint;
- provides a GET REST API that adds two numbers;
- includes an optional POST calculator endpoint;
- validates invalid input and division by zero.

## Technologies

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- REST API

## Project structure

```text
SIT725_Task_2_2P_Express_Server/
├── public/
│   ├── index.html
│   └── style.css
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Installation

Open a terminal inside the project folder and run:

```bash
npm install
```

## Run the server

```bash
npm start
```

The server will run at:

```text
http://localhost:3000
```

## API endpoints

### 1. Test endpoint

```http
GET /api/hello
```

Example:

```text
http://localhost:3000/api/hello
```

### 2. Add two numbers

```http
GET /api/add?num1=10&num2=5
```

Example response:

```json
{
  "success": true,
  "operation": "addition",
  "num1": 10,
  "num2": 5,
  "result": 15
}
```

### 3. Optional calculator endpoint

```http
POST /api/calculate
Content-Type: application/json
```

Example body:

```json
{
  "num1": 12,
  "num2": 4,
  "operation": "multiply"
}
```

Supported operations:

- `add`
- `subtract`
- `multiply`
- `divide`

## Evidence to capture

Take screenshots showing:

1. the project files in VS Code;
2. the terminal after running `npm install`;
3. the terminal showing the server running;
4. the webpage at `http://localhost:3000`;
5. the addition result on the webpage;
6. the JSON result from `/api/add?num1=10&num2=5`;
7. the GitHub repository after pushing the code.

## GitHub commands

```bash
git init
git add .
git commit -m "Complete SIT725 Task 2.2P Express server"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.
