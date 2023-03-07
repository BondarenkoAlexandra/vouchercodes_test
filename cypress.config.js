const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9soo6c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
