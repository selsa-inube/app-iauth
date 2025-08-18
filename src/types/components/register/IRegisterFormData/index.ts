interface IRegisterFormData {
  // Paso 1: Account
  username: string;

  // Paso 2: Password
  password: string;
  confirmPassword: string;

  // Paso 3: Contact Info
  email: string;
  phone: string;
  phoneCountryCode: string;
  isWhatsappUsed: boolean;
  whatsappPhone?: string;
  whatsappPhoneCountryCode?: string;

  // Paso 4: Security Questions
  securityQuestion1: string;
  securityQuestion2: string;
  securityQuestion3: string;
  religion: string;
  birthplace: string;

  // Paso 5: Data Usage
  dataTreatmentAccepted: boolean;
  dataIdentityAccepted: boolean;
}

export type { IRegisterFormData };
