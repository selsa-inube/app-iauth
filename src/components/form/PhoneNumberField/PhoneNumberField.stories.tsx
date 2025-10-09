import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PhoneNumberField } from ".";
import type { CountryOption, IPhoneNumberField } from "./types";
import { countries as defaultCountries } from "./countries";

const meta: Meta<typeof PhoneNumberField> = {
  title: "Form/PhoneNumberField",
  component: PhoneNumberField,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    countryCode: { control: "text" },
    showDialCode: { control: "boolean" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    maxLength: { control: { type: "number", min: 1, max: 30 } },
    error: { control: "text" },
    fullwidth: { control: "boolean" },
    size: { control: "inline-radio", options: ["compact", "wide"] },
  },
  parameters: {
    docs: {
      autodocs: false,
      description: {
        component:
          "Campo combinado para capturar números de teléfono con selector de país y validaciones básicas.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof PhoneNumberField>;

export const Playground: Story = {
  args: {
    id: "phone",
    label: "Número",
    placeholder: "Número móvil",
    countryCode: "CO",
    showDialCode: true,
    size: "compact",
    fullwidth: false
  },
};

export const WithError: Story = {
  args: {
    ...Playground.args,
    error: "Número inválido",
    value: "123",
  },
};

export const Disabled: Story = {
  args: {
    ...Playground.args,
    disabled: true,
    value: "3012345678",
  },
};

export const Required: Story = {
  args: {
    ...Playground.args,
    required: true,
  },
};

export const WideAndFullWidth: Story = {
  args: {
    ...Playground.args,
    size: "wide",
    fullwidth: true,
  },
};

export const WithoutDialCode: Story = {
  args: {
    ...Playground.args,
    showDialCode: false,
  },
};

export const CustomCountries: Story = {
  args: {
    ...Playground.args,
    countryCode: "US",
  },
  render: (args) => {
    const customCountries: CountryOption[] = [
      { code: "CO", dialCode: "+57", name: "Colombia" },
      { code: "US", dialCode: "+1", name: "Estados Unidos" },
      { code: "MX", dialCode: "+52", name: "México" },
      { code: "AR", dialCode: "+54", name: "Argentina" },
      { code: "ES", dialCode: "+34", name: "España" },
    ];

    return <PhoneNumberField {...args} countries={customCountries} />;
  },
};

export const ControlledExample: Story = {
  render: (args: IPhoneNumberField) => {
    const [value, setValue] = useState("");
    const [lastCountry, setLastCountry] = useState<string>(args.countryCode || "CO");

    return (
      <div style={{ minWidth: 320, width: 420 }}>
        <PhoneNumberField
          {...args}
          value={value}
          onChange={setValue}
          onCountryChange={(c) => setLastCountry(c.code)}
          fullwidth
        />
        <div style={{ marginTop: 12, fontSize: 12, color: "#667085" }}>
          <strong>Valor:</strong> {value || "(vacío)"} <br />
          <strong>País:</strong> {lastCountry}
        </div>
      </div>
    );
  },
  args: {
    ...Playground.args,
    required: true,
  },
};

export const SearchAndNoResultsCopy: Story = {
  args: {
    ...Playground.args,
    searchPlaceholder: "Buscar país o prefijo",
    noResultsText: "No encontramos coincidencias",
  },
};

export const LongListPerformance: Story = {
  render: (args) => {
    const many = new Array(200).fill(null).map((_, i) => ({
      code: `X${(i % 26).toString(36).toUpperCase()}`.slice(0, 2),
      dialCode: `+${100 + i}`,
      name: `País Demo ${i + 1}`,
    })) as CountryOption[];

    return (
      <div style={{ width: 420 }}>
        <PhoneNumberField {...args} countries={[...defaultCountries, ...many]} />
      </div>
    );
  },
  args: { ...Playground.args },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo para verificar scroll y filtrado con listas extensas (200+ items).",
      },
    },
  },
};
