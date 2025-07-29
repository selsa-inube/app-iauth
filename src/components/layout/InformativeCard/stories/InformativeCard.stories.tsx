import type { Meta, StoryObj } from "@storybook/react-vite";
import { InformativeCard } from "../index";
import { EStatusIcon } from "@enum/components/EStatusIcon";

const meta = {
  title: "Layout/InformativeCard",
  component: InformativeCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $isMobile: {
      control: "boolean",
      description: "Si la tarjeta está en vista móvil",
    },
    title: {
      control: "text",
      description: "Título principal de la tarjeta",
    },
    message: {
      control: "text",
      description: "Mensaje descriptivo",
    },
    buttonText: {
      control: "text",
      description: "Texto del botón de acción",
    },
    buttonVariant: {
      control: "select",
      options: ["primary", "warning"],
      description: "Variante del botón",
    },
    icon: {
      control: "select",
      options: Object.values(EStatusIcon),
      description: "Tipo de icono a mostrar",
    },
    labelsSizeDifferent: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Tamaño de las etiquetas del header",
    },
  },
} satisfies Meta<typeof InformativeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserRegistered: Story = {
  args: {
    $isMobile: false,
    title: "Ya estás registrado.",
    message:
      'Ya estás registrado, utiliza tus credenciales o dirígete al portal que requieres por la opción "¿Olvidaste tu usuario?".',
    buttonText: "Entendido",
    buttonVariant: "primary",
    icon: EStatusIcon.USER_CHECK,
    labelsSizeDifferent: "large",
    onButtonClick: () => console.log("Button clicked!"),
  },
};

export const LinkExpired: Story = {
  args: {
    $isMobile: false,
    title: "Lo sentimos.",
    message:
      "Esta invitación perdió su vigencia después de # días sin utilizarse, si lo requieres, dirígete nuevamente al portal donde solicitaste el registro.",
    buttonText: "Entendido",
    buttonVariant: "warning",
    icon: EStatusIcon.CLOCK_WARNING,
    labelsSizeDifferent: "large",
    onButtonClick: () => console.log("Button clicked!"),
  },
};

export const MobileView: Story = {
  args: {
    $isMobile: true,
    title: "Vista móvil",
    message:
      "Esta es la vista de la tarjeta optimizada para dispositivos móviles con espaciado y tamaños ajustados.",
    buttonText: "Continuar",
    buttonVariant: "primary",
    icon: EStatusIcon.USER_CHECK,
    labelsSizeDifferent: "medium",
    onButtonClick: () => console.log("Mobile button clicked!"),
  },
};

export const CustomMessage: Story = {
  args: {
    $isMobile: false,
    title: "Mensaje personalizado",
    message:
      "Este es un ejemplo de mensaje completamente personalizado que demuestra la flexibilidad del componente InformativeCard.",
    buttonText: "Acción personalizada",
    buttonVariant: "warning",
    icon: EStatusIcon.CLOCK_WARNING,
    labelsSizeDifferent: "large",
    onButtonClick: () => console.log("Custom action!"),
  },
};
