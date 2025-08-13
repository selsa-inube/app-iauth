interface IPasswordValidationResult {
  isValid: boolean;
  failedRequirements: string[];
  passedRequirements: string[];
}

export type { IPasswordValidationResult };
