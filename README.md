# Module 1 Assignment - Building a Back-End Environment

Student: Attamveer Singh Mann  
Student ID: 0425777

Repository: https://github.com/attamveer/module-1-assignment

## Overview

This project is a Node.js, Express, and TypeScript API created for Module 1. It includes a health check endpoint, a portfolio performance calculation endpoint, automated Jest tests, ESLint checks, and GitHub Actions continuous integration.

## API Endpoints

### Health Check

GET /api/v1/health

### Portfolio Performance

GET /api/v1/portfolio/performance

Query parameters:

- initialInvestment
- currentValue

Example:

GET /api/v1/portfolio/performance?initialInvestment=10000&currentValue=13000

## Running the Project

Install dependencies:

npm install

Start the server:

npm start

The API runs at:

http://localhost:3000

## Quality Checks

Build the TypeScript project:

npm run build

Run automated tests:

npm test

Run ESLint:

npm run lint

## Branching

Development work is completed on the development branch. The final pull request targets the main branch.