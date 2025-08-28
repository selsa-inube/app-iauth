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
  phoneDialCode: string;
  isWhatsappUsed: boolean;
  whatsappPhone?: string;
  whatsappPhoneCountryCode?: string;
  whatsappPhoneDialCode?: string;

  // Paso 4: Security Questions (Dynamic)
  securityAnswers: Record<string, string>;

  // Paso 5: Data Usage
  dataTreatmentAccepted: boolean;
  dataIdentityAccepted: boolean;
}

export type { IRegisterFormData };
