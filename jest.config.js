module.exports = {
  preset: "ts-jest", 
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  testMatch: ["<rootDir>/src/__tests__/**/*.test.ts?(x)"],
};
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest", 
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  testMatch: [
    "<rootDir>/src/__tests__/**/*.(test|spec).ts",
    "<rootDir>/src/**/*.(test|spec).ts", 
  ],
};
