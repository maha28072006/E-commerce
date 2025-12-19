require("dotenv").config();   // MUST BE FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();
app.use(
  cors({
    origin: [
      "http://13.201.134.109:3000/", // frontend public IP
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// app.use(cors({
//   origin: "*",   // for development (later restrict this)
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }));
// app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// routes
app.use("/api/books", require("./routes/bookRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

