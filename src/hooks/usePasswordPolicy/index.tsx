import { useCallback } from "react";
import type {
  IPasswordPolicy,
  IPasswordValidationResult,
} from "@ptypes/hooks/usePasswordPolicy";

const usePasswordPolicy = () => {
  const validatePassword = useCallback(
    (
      password: string,
      policy: IPasswordPolicy | null,
    ): IPasswordValidationResult => {
      if (!policy) {
        return {
          isValid: false,
          failedRequirements: ["No se ha cargado la política de contraseñas"],
          passedRequirements: [],
        };
      }

      const failedRequirements: string[] = [];
      const passedRequirements: string[] = [];

      policy.requirements.forEach((requirement) => {
        try {
          const regex = new RegExp(requirement.regex);
          if (regex.test(password)) {
            passedRequirements.push(requirement.value);
          } else {
            failedRequirements.push(requirement.value);
          }
        } catch (regexError) {
          console.error(`Error en regex: ${requirement.regex}`, regexError);
          failedRequirements.push(requirement.value);
        }
      });

      return {
        isValid: failedRequirements.length === 0,
        failedRequirements,
        passedRequirements,
      };
    },
    [],
  );

  return {
    validatePassword,
  };
};

export { usePasswordPolicy };
