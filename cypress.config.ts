// const { defineConfig } = require("cypress");
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     charts: true,
//     reportPageTitle: 'Reporte Seller Center - Squad 2',
//     embeddedScreenshots: true,
//     inlineAssets: true,
//     saveAllAttempts: false,
//     ignoreVideos: false,
//     videoOnFailOnly: true
//   },
//   e2e: {
//     specPattern: ["**/*.feature","**/*.ts"],
//     async setupNodeEvents(
//       on: Cypress.PluginEvents, 
//       config: Cypress.PluginConfigOptions
//       ): Promise<Cypress.PluginConfigOptions> {
//         await addCucumberPreprocessorPlugin(on, config);
//         on(
//           "file:preprocessor",
//           createBundler({
//             plugins: [createEsbuildPlugin(config)],
//           })
//           );
//         // implement node event listeners here
//         require('cypress-mochawesome-reporter/plugin')(on);
//         return config;
//     },
    
//   },
// });
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: ["**/*.feature"],
  },
});