import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  passWithNoTests: true,
  collectCoverage: true,
};

export default config;
