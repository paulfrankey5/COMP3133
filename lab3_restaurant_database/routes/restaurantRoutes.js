const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");


router.get("/", async (req, res) => {
  try {
    const sortOrder =
      req.query.sortBy === "DESC" ? -1 : 1;

    const restaurants = await Restaurant.find({})
      .select("restaurant_id name city cuisines")
      .sort({ restaurant_id: sortOrder });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: req.params.cuisine
    });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" }
    })
      .select("cuisines name city -_id")
      .sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
