import { Request, Response, Router } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router: Router = Router();

/**
 * Calculates portfolio performance using investment values supplied
 * through query parameters.
 *
 * @param req - The incoming Express request.
 * @param res - The Express response.
 */
const getPortfolioPerformance = (req: Request, res: Response): void => {
  const initialInvestment: number = Number(req.query.initialInvestment);
  const currentValue: number = Number(req.query.currentValue);

  const result = calculatePortfolioPerformance(
    initialInvestment,
    currentValue
  );

  res.status(200).json(result);
};

router.get("/performance", getPortfolioPerformance);

export default router;