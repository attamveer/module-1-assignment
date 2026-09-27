import { Request, Response, Router } from "express";

const router: Router = Router();

/**
 * Returns the current health status of the API.
 *
 * @param _req - The incoming Express request.
 * @param res - The Express response.
 */
const getHealthStatus = (_req: Request, res: Response): void => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
};

router.get("/health", getHealthStatus);

export default router;