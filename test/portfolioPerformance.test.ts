import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  it("should return excellent performance for a 30 percent gain", () => {
    // Arrange
    const initialInvestment = 10000;
    const currentValue = 13000;

    // Act
    const result = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    // Assert
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(13000);
    expect(result.profitOrLoss).toBe(3000);
    expect(result.percentageChange).toBe(30);
    expect(result.performanceSummary).toBe(
      "Excellent performance! Your investments are doing great."
    );
  });

  it("should return solid gain for exactly 10 percent growth", () => {
    // Arrange
    const initialInvestment = 10000;
    const currentValue = 11000;

    // Act
    const result = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    // Assert
    expect(result.profitOrLoss).toBe(1000);
    expect(result.percentageChange).toBe(10);
    expect(result.performanceSummary).toBe(
      "Solid gain. Keep monitoring your investments."
    );
  });

  it("should return no change when the portfolio value stays the same", () => {
    // Arrange
    const initialInvestment = 10000;
    const currentValue = 10000;

    // Act
    const result = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    // Assert
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe(
      "No change. Your portfolio is holding steady."
    );
  });

  it("should return minor loss for exactly a 10 percent loss", () => {
    // Arrange
    const initialInvestment = 10000;
    const currentValue = 9000;

    // Act
    const result = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    // Assert
    expect(result.profitOrLoss).toBe(-1000);
    expect(result.percentageChange).toBe(-10);
    expect(result.performanceSummary).toBe(
      "Minor loss. Stay calm and review your options."
    );
  });
});