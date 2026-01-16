const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
  },
  type: {
    type: String,
    enum: ["BUY", "SELL"],   //  prevents wrong values
    required: true,
  },
}, { timestamps: true });

module.exports = { OrdersSchema };