import { useState, useMemo, useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdKeyboardArrowDown } from "react-icons/md";
import { countries as defaultCountries } from "./countries";
import type { CountryOption, IPhoneNumberFieldProps } from "./types";
import {
  Wrapper,
  LabelRow,
  FieldContainer,
  CountryButton,
  NumberInput,
  Dropdown,
  SearchBox,
  CountryList,
  CountryItem,
  HelperText,
  ErrorContainer,
  WarningIcon,
} from "./styles";

const PhoneNumberFieldUI = (props: IPhoneNumberFieldProps) => {
  const {
    id,
    label = "Número",
    placeholder = "Número móvil",
    value = "",
    countryCode = "CO",
    showDialCode = true,
    onChange,
    onCountryChange,
    disabled,
    required,
    maxLength = 20,
    error,
    fullwidth,
    size = "compact",
    countries,
    searchPlaceholder = "Buscar país o código",
    noResultsText = "Sin resultados",
    selectCountryAriaLabel = "Seleccionar país",
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const availableCountries = countries?.length ? countries : defaultCountries;
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    () =>
      availableCountries.find((country) => country.code === countryCode) ??
      availableCountries[0],
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredCountries = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return availableCountries;
    return availableCountries.filter(
      (country) =>
        country.name.toLowerCase().includes(normalizedSearch) ||
        country.dialCode.replace("+", "").includes(normalizedSearch) ||
        country.code.toLowerCase() === normalizedSearch,
    );
  }, [searchTerm, availableCountries]);

  const handleCountrySelect = (newCountry: CountryOption) => {
    setSelectedCountry(newCountry);
    onCountryChange?.(newCountry);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleGlobalMouseDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", handleGlobalMouseDown);
    return () => window.removeEventListener("mousedown", handleGlobalMouseDown);
  }, []);

  return (
    <Wrapper $fullwidth={fullwidth}>
      {label && (
        <LabelRow htmlFor={id} $disabled={disabled}>
          {label}
          {required && " *"}
        </LabelRow>
      )}
      <div style={{ position: "relative" }} ref={dropdownRef}>
        <FieldContainer $size={size} $invalid={!!error} $disabled={disabled}>
          <CountryButton
            type="button"
            aria-label={selectCountryAriaLabel}
            onClick={() =>
              !disabled && setIsDropdownOpen((current) => !current)
            }
            $size={size}
            $open={isDropdownOpen}
            disabled={disabled}
          >
            <ReactCountryFlag
              svg
              countryCode={selectedCountry.code}
              style={{ width: "20px", height: "20px", borderRadius: "50%" }}
            />
            {showDialCode && (
              <span className="dial">({selectedCountry.dialCode})</span>
            )}
            <MdKeyboardArrowDown size={18} />
          </CountryButton>
          <NumberInput
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              const sanitizedValue = e.target.value.replace(
                /[^0-9\s\-()]/g,
                "",
              );
              onChange?.(sanitizedValue);
            }}
            disabled={disabled}
            maxLength={maxLength}
            $size={size}
            autoComplete="tel"
            inputMode="tel"
          />
        </FieldContainer>
        {isDropdownOpen && (
          <Dropdown>
            <SearchBox
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <CountryList>
              {filteredCountries.map((country) => (
                <CountryItem
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  $active={country.code === selectedCountry.code}
                >
                  <ReactCountryFlag
                    svg
                    countryCode={country.code}
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="name">{country.name}</span>
                  <span className="code">{country.dialCode}</span>
                </CountryItem>
              ))}
              {filteredCountries.length === 0 && (
                <CountryItem $active={false} style={{ cursor: "default" }}>
                  <span className="name">{noResultsText}</span>
                </CountryItem>
              )}
            </CountryList>
          </Dropdown>
        )}
      </div>
      {error && (
        <ErrorContainer>
          <WarningIcon>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1L11 10H1L6 1Z"
                stroke="#D14343"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M6 4V6"
                stroke="#D14343"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6" cy="8.5" r="0.5" fill="#D14343" />
            </svg>
          </WarningIcon>
          <HelperText $error>{error}</HelperText>
        </ErrorContainer>
      )}
    </Wrapper>
  );
};

export { PhoneNumberFieldUI };
