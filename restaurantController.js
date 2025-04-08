import Restaurant from "../models/Restaurant.js";

export const createRestaurant = async (req, res) => {
  try {
    const { name, location, cuisine } = req.body;
    const newRestaurant = new Restaurant({ name, location, cuisine });
    await newRestaurant.save();
    res.json({ message: "✅ Restaurant Added" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
