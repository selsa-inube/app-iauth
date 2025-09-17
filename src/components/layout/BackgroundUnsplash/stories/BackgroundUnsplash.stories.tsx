import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackgroundUnsplash } from "../index";
import { Text } from "@inubekit/inubekit";
import styled from "styled-components";

const StyledCenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  gap: 16px;
`;

const StyledCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const StyledCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  text-align: center;
`;

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
      <StyledCenteredColumn>
        <Text type="headline" size="large" appearance="dark" textAlign="center">
          Contenido sobre fondo Unsplash
        </Text>
        <Text type="body" size="medium" appearance="gray" textAlign="center">
          Este es un ejemplo de contenido que se muestra sobre el fondo de
          Unsplash.
        </Text>
      </StyledCenteredColumn>
    ),
  },
};

export const WithCard: Story = {
  args: {
    children: (
      <StyledCentered>
        <StyledCard>
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
        </StyledCard>
      </StyledCentered>
    ),
  },
};
