const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://hogar-ia-web.vercel.app/",
    experimentalStudio: true, // Habilita Cypress Studio (solo en versiones antiguas)
    setupNodeEvents(on, config) {
      // Implementa eventos de Cypress aquí
    },
  },
});
