import type { Meta, StoryObj } from "@storybook/react";
import { InformationBox } from "../index";

const meta: Meta<typeof InformationBox> = {
  title: "Components/Utils/InformationBox",
  component: InformationBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título del cuadro informativo",
    },
    content: {
      control: "text",
      description: "Contenido del cuadro informativo",
    },
    width: {
      control: "text",
      description: "Ancho del componente",
    },
    height: {
      control: "text",
      description: "Alto del componente",
    },
    minWidth: {
      control: "text",
      description: "Ancho mínimo del componente",
    },
    maxWidth: {
      control: "text",
      description: "Ancho máximo del componente",
    },
    minHeight: {
      control: "text",
      description: "Alto mínimo del componente",
    },
    maxHeight: {
      control: "text",
      description: "Alto máximo del componente",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Información importante",
    content: "Este es un ejemplo de contenido informativo que se mostrará en el cuadro. Puede contener información relevante para el usuario.",
  },
};

export const UserDataExample: Story = {
  args: {
    title: "Nombre",
    content: "Pedro Pablo Iregui Guerrero",
    width: "300px",
    minHeight: "96px",
  },
};

export const ContactDataExample: Story = {
  args: {
    title: "Correo de contacto",
    content: "pedro.iregui@hotmail.com",
    width: "100%",
    minHeight: "96px",
  },
};

export const PhoneDataExample: Story = {
  args: {
    title: "Teléfono de contacto",
    content: "(+57) 3102370873 activo para WA.",
    width: "100%",
    minHeight: "96px",
  },
};

export const LongContent: Story = {
  args: {
    title: "Información detallada",
    content: "Este es un ejemplo de contenido más extenso que puede incluir múltiples líneas de texto para proporcionar información detallada al usuario sobre diferentes aspectos del proceso o la funcionalidad que está utilizando. El componente debe manejar correctamente el texto largo y mantener una buena legibilidad.",
    width: "400px",
  },
};
