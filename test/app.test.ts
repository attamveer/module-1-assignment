import request, { Response } from "supertest";
import app from "../src/app";

describe("API endpoints", () => {
  describe("GET /api/v1/health", () => {
    it("should return the API health status", async () => {
      // Arrange
      const endpoint: string = "/api/v1/health";

      // Act
      const response: Response = await request(app).get(endpoint);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.status).toBe("OK");
      expect(response.body).toHaveProperty("uptime");
      expect(response.body).toHaveProperty("timestamp");
      expect(response.body.version).toBe("1.0.0");
    });
  });

  describe("GET /api/v1/portfolio/performance", () => {
    it("should calculate portfolio performance from query parameters", async () => {
      // Arrange
      const endpoint: string = "/api/v1/portfolio/performance";

      // Act
      const response: Response = await request(app)
        .get(endpoint)
        .query({
          initialInvestment: 10000,
          currentValue: 13000,
        });

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        initialInvestment: 10000,
        currentValue: 13000,
        profitOrLoss: 3000,
        percentageChange: 30,
        performanceSummary:
          "Excellent performance! Your investments are doing great.",
      });
    });
  });
});