const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '4ay4vw',
  e2e: {
    baseUrl: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  },
})
