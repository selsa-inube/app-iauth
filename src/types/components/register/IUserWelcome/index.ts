export interface IUserWelcome {
  userData: {
    firstName: string;
    lastName: string;
    documentType: string;
    documentNumber: string;
  };
  labels: {
    welcomeMessage: {
      greeting: string;
    };
  };
}
