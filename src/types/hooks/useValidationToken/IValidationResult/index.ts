import type { UserData } from '../IUserData';

interface ValidationResult {
  type: "LINK_EXPIRED" | "USER_ALREADY_REGISTERED" | "VALID_USER_DATA";
  userData?: UserData;
}

export type { ValidationResult };
