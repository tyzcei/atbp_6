module.exports = {
    testEnvironment: 'allure-jest/node',
    testEnvironmentOptions: {
      resultsDir: './allure-results'
    },
    testMatch: ['**/__tests__/**/*.test.js'],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  };