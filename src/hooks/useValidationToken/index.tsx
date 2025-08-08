import { useState, useCallback } from "react";
import type { ValidationResult } from "@ptypes/hooks/useValidationToken/IValidationResult";


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
      const mockResponse = await simulateApiCall(token);

      setValidationResult(mockResponse);
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

const simulateApiCall = async (token: string): Promise<ValidationResult> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (token.includes("expired")) {
    return { type: "LINK_EXPIRED" };
  }

  if (token.includes("registered")) {
    return { type: "USER_ALREADY_REGISTERED" };
  }

  return {
    type: "VALID_USER_DATA",
    userData: {
      documentType: "CC",
      documentNumber: "1234567890",
      firstName: "Juan",
      lastName: "Pérez",
    },
  };
};

export { useValidationToken };