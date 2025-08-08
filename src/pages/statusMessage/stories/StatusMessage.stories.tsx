import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusMessage } from "../index";
import { EStatusMessage } from "@enum/pages/EStatusMessage";
import { EStatusIcon } from "@enum/components/EStatusIcon";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Pages/StatusMessage",
  component: StatusMessage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    messageType: {
      control: "select",
      options: Object.values(EStatusMessage),
      description: "Tipo de mensaje a mostrar",
    },
    customMessage: {
      control: "object",
      description:
        "Mensaje personalizado que sobrescribe la configuración por defecto",
    },
  },
} satisfies Meta<typeof StatusMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserAlreadyRegistered: Story = {
  args: {
    messageType: EStatusMessage.USER_ALREADY_REGISTERED,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Mensaje mostrado cuando el usuario ya está registrado en el sistema. Utiliza los nuevos componentes modularizados: BackgroundUnsplash, InformativeCard y StatusIcon.",
      },
    },
  },
};

export const LinkExpired: Story = {
  args: {
    messageType: EStatusMessage.LINK_EXPIRED,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Mensaje mostrado cuando el enlace de invitación ha expirado. Demuestra la reutilización de componentes con diferente contenido.",
      },
    },
  },
};

export const WithCustomMessage: Story = {
  args: {
    messageType: EStatusMessage.USER_ALREADY_REGISTERED,
    customMessage: {
      title: "Título personalizado",
      message:
        "Este es un mensaje completamente personalizado para mostrar la flexibilidad del componente modularizado.",
      buttonText: "Acción personalizada",
      buttonAppearance: "warning",
      icon: EStatusIcon.CLOCK_WARNING,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo de uso con mensaje completamente personalizado. Muestra la flexibilidad de los componentes refactorizados.",
      },
    },
  },
};

export const MobileView: Story = {
  args: {
    messageType: EStatusMessage.LINK_EXPIRED,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Vista optimizada para dispositivos móviles. Los componentes se adaptan automáticamente.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
