const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.(js|tsx)"],
  addons: [
    "@storybook/preset-typescript",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {}
      }
    },
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    "@storybook/addon-links"
  ]
};
