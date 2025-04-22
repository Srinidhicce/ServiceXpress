const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user_id: String,
  products: [
    {
      product_id: String,
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
