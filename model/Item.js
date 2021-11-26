const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isSanitized: {
    type: Boolean,
    default: true,
  },
  unit: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  category: {
    type: String,
    default: "Grocery",
    enum: [
      "Grocery",
      "Medical",
      "Fruits&Veg",
      "Berverages",
      "Babycare",
      "Cleaning",
    ],
  },
  location: {
    type: String,
    default: "Store",
    enum: ["Store", "Kitchen"],
  },
});

itemSchema.pre("findByIdAndUpdate", () => {
  this.set({ updatedAt: Date.now() });
});
itemSchema.post("findByIdAndUpdate", () => {
  this.set({ updatedAt: Date.now() });
});
const ItemModel = mongoose.model("Item", itemSchema);

module.exports = { ItemModel };
