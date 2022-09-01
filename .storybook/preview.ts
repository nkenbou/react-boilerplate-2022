import { withScreenshot } from "storycap";

export const decorators = [withScreenshot];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  screenshot: {
    // Put global screenshot parameters(e.g. viewport)
  },
};
