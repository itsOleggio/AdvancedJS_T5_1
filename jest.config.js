/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',

  testMatch: [
    '<rootDir>/src/ts/__tests__/**/*.ts'
  ],

  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },

  collectCoverageFrom: [
    'src/ts/**/*.ts',
    '!src/ts/__tests__/**',
  ],
};
