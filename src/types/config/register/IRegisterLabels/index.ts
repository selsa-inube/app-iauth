interface IRegisterLabels {
  title: string;
  subtitle: string;
  welcomeMessage: {
    greeting: string;
    userInfo: string;
  };
  invitedBy: {
    text: string;
    imageUrl: string;
  };
}

export type { IRegisterLabels };
