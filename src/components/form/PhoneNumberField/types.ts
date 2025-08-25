interface CountryOption {
  code: string; // ISO alpha-2 e.g. CO
  dialCode: string; // e.g. +57
  name: string; // e.g. Colombia
}

interface IPhoneNumberFieldProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  countryCode?: string; // ISO alpha-2
  showDialCode?: boolean;
  onChange?: (value: string) => void;
  onCountryChange?: (country: CountryOption) => void;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  error?: string;
  fullwidth?: boolean;
  size?: "compact" | "wide";
  countries?: CountryOption[];
  searchPlaceholder?: string;
  noResultsText?: string;
  selectCountryAriaLabel?: string;
  minDigits?: number;
}

export type { CountryOption, IPhoneNumberFieldProps };
