import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json({ message: "✅ Order Placed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
