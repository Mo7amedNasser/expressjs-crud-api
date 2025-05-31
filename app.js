import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/product.route.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Get PORT from .env or append it a default value
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Express CRUD API");
});

app.use("/api/products", productRouter);

// Connect to MongoDB then start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Lanunch the server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the MongoDB:", err.message);
    process.exit(1); // Exit app if DB connection fails
  });
