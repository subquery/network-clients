/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
  ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['./test/jest-setup.ts'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['node_modules/(?!(@polkadot|@subql|@babel/runtime/helpers/esm)/)'],
};