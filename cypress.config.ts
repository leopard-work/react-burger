import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1300,
  viewportHeight: 1100,
  defaultCommandTimeout: 20000,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
