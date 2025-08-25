import { useState } from "react";
import type { CountryOption, IPhoneNumberFieldProps } from "./types";
import { PhoneNumberFieldUI } from "./interface";
import { countries as defaultCountries } from "./countries";

const PhoneNumberField = (props: IPhoneNumberFieldProps) => {
  const {
    value: externalValue,
    onChange,
    countryCode = "CO",
    onCountryChange,
    countries,
    ...rest
  } = props;

  const availableCountries =
    countries && countries.length > 0 ? countries : defaultCountries;

  const [phoneValue, setPhoneValue] = useState(externalValue ?? "");
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    () =>
      availableCountries.find((country) => country.code === countryCode) ??
      availableCountries[0],
  );

  const handlePhoneValueChange = (newValue: string) => {
    setPhoneValue(newValue);
    onChange?.(newValue);
  };

  const handleSelectedCountryChange = (newCountry: CountryOption) => {
    setSelectedCountry(newCountry);
    onCountryChange?.(newCountry);
  };

  return (
    <PhoneNumberFieldUI
      {...rest}
      value={externalValue ?? phoneValue}
      countryCode={selectedCountry.code}
      onChange={handlePhoneValueChange}
      onCountryChange={handleSelectedCountryChange}
      countries={availableCountries}
    />
  );
};

export { PhoneNumberField };
