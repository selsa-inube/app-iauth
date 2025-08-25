import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackgroundUnsplash } from "../index";
import { Text } from "@inubekit/inubekit";

const meta = {
  title: "Layout/BackgroundUnsplash",
  component: BackgroundUnsplash,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "Contenido que se mostrará sobre el fondo de Unsplash",
    },
  },
} satisfies Meta<typeof BackgroundUnsplash>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "20px",
          gap: "16px",
        }}
      >
        <Text type="headline" size="large" appearance="dark" textAlign="center">
          Contenido sobre fondo Unsplash
        </Text>
        <Text type="body" size="medium" appearance="gray" textAlign="center">
          Este es un ejemplo de contenido que se muestra sobre el fondo de
          Unsplash.
        </Text>
      </div>
    ),
  },
};

export const WithCard: Story = {
  args: {
    children: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "32px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <Text
            type="headline"
            size="medium"
            appearance="dark"
            textAlign="center"
          >
            Tarjeta sobre fondo
          </Text>
          <br />
          <Text type="body" size="medium" appearance="gray" textAlign="center">
            Esta tarjeta demuestra cómo se ve el contenido sobre el fondo de
            Unsplash.
          </Text>
        </div>
      </div>
    ),
  },
};
