// ./jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'mjs', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
    '#app': '<rootDir>/node_modules/nuxt/dist/index.d.ts',
    // ↓piniaのテストはこれで動く
    '^pinia$': 'pinia/dist/pinia.cjs'
  },
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(nuxt|nuxt3|unenv))'],
  setupFiles: ['./test-utils/global-test-utils-config.ts']
}
