import { useState, useCallback } from "react";
import { getCredentialRequirements } from "../../services/getCredentialRequirements";
import { getSecurityQuestions } from "../../services/getSecurityQuestions";
import type { IPasswordPolicy } from "../../types/hooks/usePasswordPolicy";
import type { ICredentialRequirementParams } from "../../types/api/ICredentialRequirementParams";
import type { ISecurityQuestionsResponse } from "../../types/api/ISecurityQuestionsResponse";

const useCredentialRequirements = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [policy, setPolicy] = useState<IPasswordPolicy | null>(null);
  const [securityQuestions, setSecurityQuestions] =
    useState<ISecurityQuestionsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSecurityQuestionsLoading, setIsSecurityQuestionsLoading] =
    useState(false);

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

  const fetchSecurityQuestions = useCallback(
    async (params: ICredentialRequirementParams) => {
      setIsSecurityQuestionsLoading(true);
      setError(null);

      try {
        const response = await getSecurityQuestions(params);
        setSecurityQuestions(response);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error fetching security questions",
        );
        setSecurityQuestions(null);
      } finally {
        setIsSecurityQuestionsLoading(false);
      }
    },
    [],
  );

  const clearPolicy = useCallback(() => {
    setPolicy(null);
    setSecurityQuestions(null);
    setError(null);
  }, []);

  return {
    fetchCredentialRequirements,
    fetchSecurityQuestions,
    policy,
    securityQuestions,
    isLoading,
    isSecurityQuestionsLoading,
    error,
    clearPolicy,
  };
};

export { useCredentialRequirements };
