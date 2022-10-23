const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gthewhite.letsumai.com/widget/kwc-automated',
    specPattern: '**/*.{js,jsx,ts,tsx}',
  excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
