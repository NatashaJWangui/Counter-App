module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1', // Adjust for component imports
    '^@/(.*)$': '<rootDir>/$1', // Maps `@` to the root directory
    '^@lib/(.*)$': '<rootDir>/lib/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
