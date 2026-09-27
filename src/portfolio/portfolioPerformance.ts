/**
 * Represents the result of a portfolio performance calculation.
 */
export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

/**
 * Determines the performance summary for a percentage change.
 *
 * @param percentageChange - The percentage change in portfolio value.
 * @returns The matching portfolio performance summary.
 */
const getPerformanceSummary = (percentageChange: number): string => {
  switch (true) {
    case percentageChange >= 30:
      return "Excellent performance! Your investments are doing great.";

    case percentageChange >= 10 && percentageChange < 30:
      return "Solid gain. Keep monitoring your investments.";

    case percentageChange > 0 && percentageChange < 10:
      return "Modest gain. Your portfolio is growing slowly.";

    case percentageChange === 0:
      return "No change. Your portfolio is holding steady.";

    case percentageChange >= -10 && percentageChange < 0:
      return "Minor loss. Stay calm and review your options.";

    case percentageChange < -10:
      return "Significant loss. Review your portfolio strategy.";

    default:
      return "Significant loss. Review your portfolio strategy.";
  }
};

/**
 * Calculates the profit or loss, percentage change, and performance summary
 * for a financial portfolio.
 *
 * @param initialInvestment - The original amount invested.
 * @param currentValue - The current value of the investment.
 * @returns The calculated portfolio performance.
 */
export const calculatePortfolioPerformance = (
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance => {
  const profitOrLoss: number = currentValue - initialInvestment;

  const percentageChange: number =
    (profitOrLoss / initialInvestment) * 100;

  const performanceSummary: string =
    getPerformanceSummary(percentageChange);

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
};