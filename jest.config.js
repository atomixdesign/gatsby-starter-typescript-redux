const path = require('path')

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, './jest.setup.js'),
    './node_modules/jest-enzyme/lib/index.js',
  ],
  transform: {
    '^.+\\.(tsx?|jsx?)$': '<rootDir>/jest.preprocess.js',
  },
  moduleNameMapper: {
    'typeface-*': 'identity-obj-proxy',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(svg|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mocks.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)', '\\.svg'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  modulePaths: [
    '<rootDir>/src'
  ],
  collectCoverage: false,
  coverageReporters: [
    'lcov',
    'text',
    'html'
  ]
}
