const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      email: 'b.anandbalan@gmail.com',
      pwd: 'Agriya*123',
    },
    baseUrl: 'https://www.w3schools.com', // Optional: Set your base URL
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
