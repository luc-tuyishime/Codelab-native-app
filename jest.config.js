const { defaults } = require('jest-config');

module.exports = {
  displayName: 'codeLab',
  verbose: true,
  preset: 'jest-expo',
  testMatch: ['**/?(*.)+(spec|test).js'],
  collectCoverage: true,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js'
  ],
  setupFiles: ['<rootDir>/jest/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ]
};