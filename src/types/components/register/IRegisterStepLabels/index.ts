interface IRegisterStepLabels {
  account: {
    usernameLabel: string;
    usernamePlaceholder: string;
    usernameMessage: string;
    requirements: {
      title: string;
      items: string[];
    };
  };
  password: {
    passwordLabel: string;
    confirmPasswordLabel: string;
    passwordPlaceholder: string;
    confirmPasswordPlaceholder: string;
    passwordMessage: string;
    requirements: {
      title: string;
      items: string[];
    };
  };
  contactInfo: {
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    whatsappLabel: string;
    whatsappToggleLabel: string;
  };
  securityQuestions: {
    description: string;
    question1Label: string;
    question2Label: string;
    question3Label: string;
    religionLabel: string;
    religionPlaceholder: string;
    birthplaceLabel: string;
    birthplacePlaceholder: string;
    questionPlaceholder: string;
    religionOptions: { value: string; label: string; id: string }[];
    birthplaceOptions: { value: string; label: string; id: string }[];
  };
  dataUsage: {
    dataTreatmentLabel: string;
    dataIdentityLabel: string;
  };
  buttons: {
    previous: string;
    next: string;
    submit: string;
  };
}

export type { IRegisterStepLabels };
