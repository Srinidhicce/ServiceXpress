const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const cors = require("cors"); // Importing the CORS module

const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");
const cartRouter = require("./router/cartRouter");

app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/ServiceXpress")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Use routes
app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
