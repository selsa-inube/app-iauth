import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusIcon } from "../index";
import { EStatusIcon } from "@enum/components/EStatusIcon";

const meta = {
  title: "Utils/StatusIcon",
  component: StatusIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.values(EStatusIcon),
      description: "Tipo de icono a mostrar",
    },
  },
} satisfies Meta<typeof StatusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserCheck: Story = {
  args: {
    icon: EStatusIcon.USER_CHECK,
  },
  parameters: {
    docs: {
      description: {
        story: "Icono que indica que el usuario ya está registrado.",
      },
    },
  },
};

export const ClockWarning: Story = {
  args: {
    icon: EStatusIcon.CLOCK_WARNING,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icono que indica una advertencia relacionada con tiempo/expiración.",
      },
    },
  },
};
