const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Simple test endpoint
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the SIT725 Express server!"
  });
});

// GET endpoint to add two numbers
// Example: http://localhost:3000/api/add?num1=10&num2=5
app.get("/api/add", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if (
    req.query.num1 === undefined ||
    req.query.num2 === undefined ||
    Number.isNaN(num1) ||
    Number.isNaN(num2)
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide two valid numbers using num1 and num2."
    });
  }

  return res.json({
    success: true,
    operation: "addition",
    num1,
    num2,
    result: num1 + num2
  });
});

// Optional POST endpoint for a basic calculator
// Body example: { "num1": 12, "num2": 4, "operation": "multiply" }
app.post("/api/calculate", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const operation = String(req.body.operation || "").toLowerCase();

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return res.status(400).json({
      success: false,
      message: "num1 and num2 must be valid numbers."
    });
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        return res.status(400).json({
          success: false,
          message: "Division by zero is not allowed."
        });
      }
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({
        success: false,
        message: "Operation must be add, subtract, multiply, or divide."
      });
  }

  return res.json({
    success: true,
    operation,
    num1,
    num2,
    result
  });
});

// Fallback for unknown API routes
app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found."
  });
});

app.listen(PORT, () => {
  console.log(`SIT725 Express server is running at http://localhost:${PORT}`);
});
