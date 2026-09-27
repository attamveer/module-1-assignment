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
 * Defines a percentage range and its corresponding performance message.
 */
interface PerformanceRange {
  minimum: number;
  maximum: number;
  includeMinimum: boolean;
  includeMaximum: boolean;
  message: string;
}

const performanceRanges: PerformanceRange[] = [
  {
    minimum: 30,
    maximum: Infinity,
    includeMinimum: true,
    includeMaximum: true,
    message: "Excellent performance! Your investments are doing great.",
  },
  {
    minimum: 10,
    maximum: 30,
    includeMinimum: true,
    includeMaximum: false,
    message: "Solid gain. Keep monitoring your investments.",
  },
  {
    minimum: 0,
    maximum: 10,
    includeMinimum: false,
    includeMaximum: false,
    message: "Modest gain. Your portfolio is growing slowly.",
  },
  {
    minimum: 0,
    maximum: 0,
    includeMinimum: true,
    includeMaximum: true,
    message: "No change. Your portfolio is holding steady.",
  },
  {
    minimum: -10,
    maximum: 0,
    includeMinimum: true,
    includeMaximum: false,
    message: "Minor loss. Stay calm and review your options.",
  },
  {
    minimum: -Infinity,
    maximum: -10,
    includeMinimum: true,
    includeMaximum: false,
    message: "Significant loss. Review your portfolio strategy.",
  },
];

/**
 * Determines whether a percentage falls within a performance range.
 *
 * @param percentageChange - The percentage being evaluated.
 * @param range - The performance range to compare against.
 * @returns True when the percentage belongs to the supplied range.
 */
const isWithinRange = (
  percentageChange: number,
  range: PerformanceRange
): boolean => {
  const meetsMinimum: boolean = range.includeMinimum
    ? percentageChange >= range.minimum
    : percentageChange > range.minimum;

  const meetsMaximum: boolean = range.includeMaximum
    ? percentageChange <= range.maximum
    : percentageChange < range.maximum;

  return meetsMinimum && meetsMaximum;
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

  const matchingRange: PerformanceRange | undefined =
    performanceRanges.find((range: PerformanceRange) =>
      isWithinRange(percentageChange, range)
    );

  const performanceSummary: string =
    matchingRange?.message ??
    "Significant loss. Review your portfolio strategy.";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
};