module.exports = {
    preset: 'babel-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    // Если allure-jest не находится, попробуйте изменить на 'allure-jest/jsdom' 
    // или убедитесь, что пакет установлен именно как allure-jest
    setupFilesAfterEnv: ['allure-jest'], 
    reporters: [
      'default',
      ['allure-jest', {
        resultsDir: './allure-results',
        cleanResultsDir: true,
      }]
    ],
  };