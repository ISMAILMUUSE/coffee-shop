import MenuItem from "../models/MenuItem";

export const getMenu = async (_req: any, res: any) => {
  const items = await MenuItem.find();
  res.json(items);
};
