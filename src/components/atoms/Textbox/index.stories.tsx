import type { ComponentMeta } from "@storybook/react";
import { Textbox } from "./";

type Meta = ComponentMeta<typeof Textbox>;

export default {
  component: Textbox,
} as Meta;

export const Template = {
  parameters: {
    pseudo: { hover: false },
  },
};

export const Hover = {
  parameters: {
    pseudo: { hover: true },
  },
};
