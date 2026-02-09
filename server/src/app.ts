import express from "express";
import cors from "cors";

import aboutRoutes from "./routes/about.routes";
import menuRoutes from "./routes/menu.routes";
import orderRoutes from "./routes/order.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/about", aboutRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

export default app;
