import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";
import portfolioRoutes from "./api/v1/routes/portfolioRoutes";

const app: Express = express();

app.use(express.json());

app.use("/api/v1", healthRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);

export default app;