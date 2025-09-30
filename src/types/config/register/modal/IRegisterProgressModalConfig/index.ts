interface IRegisterProgressModalConfig {
  title: string;
  description: string;
  steps: {
    sending: string;
    success: string;
  };
  loading: {
    title: string;
    description: string;
  };
  button: {
    understood: string;
  };
}

export type { IRegisterProgressModalConfig };
