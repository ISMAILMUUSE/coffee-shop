import Contact from "../models/Contact";

export const sendMessage = async (req: any, res: any) => {
  const message = await Contact.create(req.body);
  res.status(201).json(message);
};
