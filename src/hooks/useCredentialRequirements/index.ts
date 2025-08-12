import { useState, useCallback } from "react";
import { getCredentialRequirements } from "../../services/getCredentialRequirements";
import type { IPasswordPolicy } from "../../types/hooks/usePasswordPolicy";
import type { ICredentialRequirementParams } from "../../types/api/ICredentialRequirementParams";

const useCredentialRequirements = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [policy, setPolicy] = useState<IPasswordPolicy | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCredentialRequirements = useCallback(
    async (params: ICredentialRequirementParams) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getCredentialRequirements(params);
        setPolicy(response);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error fetching credential requirements",
        );
        setPolicy(null);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const clearPolicy = useCallback(() => {
    setPolicy(null);
    setError(null);
  }, []);

  return {
    fetchCredentialRequirements,
    policy,
    isLoading,
    error,
    clearPolicy,
  };
};

export { useCredentialRequirements };
