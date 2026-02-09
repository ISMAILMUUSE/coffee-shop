import About from "../models/About";

export const getAbout = async (_req: any, res: any) => {
  const about = await About.findOne();
  res.json(about);
};
