// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
  moduleFileExtensions: ['js', 'ts', 'json', 'tsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['./test/jest-setup.ts'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@subql/eth-provider$': '<rootDir>/packages/eth-provider/src/',
    '^@subql/eth-provider/(.*)$': '<rootDir>/packages/eth-provider/src/$1',
    '^@subql/network-support$': '<rootDir>/packages/network-support/src/',
    '^@subql/network-support/(.*)$': '<rootDir>/packages/network-support/src/$1',
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['node_modules/(?!(@polkadot|@subql|@babel/runtime/helpers/esm)/)'],
};
