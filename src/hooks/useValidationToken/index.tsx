import { useState, useCallback } from "react";
import type { ValidationResult } from "@ptypes/hooks/useValidationToken/IValidationResult";


export const useValidationToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateToken = useCallback(async (token: string) => {
    console.log("Validating token:", token);
    setIsLoading(true);
    setError(null);
    setValidationResult(null);

    try {
      // TODO: Reemplazar con la llamada real a la API
      // Por ahora simulamos diferentes respuestas para testing
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

// Función temporal para simular la API
const simulateApiCall = async (token: string): Promise<ValidationResult> => {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simular diferentes respuestas basadas en el token para testing
  if (token.includes("expired")) {
    return { type: "LINK_EXPIRED" };
  }

  if (token.includes("registered")) {
    return { type: "USER_ALREADY_REGISTERED" };
  }

  // Por defecto, simular datos válidos de usuario
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
