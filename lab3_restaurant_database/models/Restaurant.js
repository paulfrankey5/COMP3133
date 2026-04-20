const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {},
  {
    strict: false,
    collection: "restaurants"
  }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
