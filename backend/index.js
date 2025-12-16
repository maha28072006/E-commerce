// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Import routes
// const productRoutes = require("./routes/productRoutes");

// // Use routes
// app.use("/api/products", productRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/ecommerce")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// // Start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoute");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ FIX HERE
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
