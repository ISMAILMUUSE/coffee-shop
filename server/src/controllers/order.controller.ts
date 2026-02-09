import Order from "../models/Order";

export const createOrder = async (req: any, res: any) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};
