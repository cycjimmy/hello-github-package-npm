export default {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(mjs?|jsx?|js?|tsx?|ts?)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.mjs',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.mjs'
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};
