import { useState, useCallback } from "react";
import type { ValidationResult } from "@ptypes/hooks/useValidationToken/IValidationResult";
import { validateRegistrationRequest } from "@services/validateRegistrationRequest";

const useValidationToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateToken = useCallback(async (token: string) => {
    setIsLoading(true);
    setError(null);
    setValidationResult(null);

    try {
      const apiData = await validateRegistrationRequest(token);
      setValidationResult(apiData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    validateToken,
    isLoading,
    validationResult,
    error,
  };
};

export { useValidationToken };
