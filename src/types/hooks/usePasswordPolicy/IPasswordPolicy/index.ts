import type { IPasswordPolicyRequirement } from "../IPasswordPolicyRequirement";

interface IPasswordPolicy {
  policyForTheUserKey: string;
  requirements: IPasswordPolicyRequirement[];
}

export type { IPasswordPolicy };
