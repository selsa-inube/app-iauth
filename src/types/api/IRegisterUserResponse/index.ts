interface IRegisterUserResponse {
  success: boolean;
  message: string;
  userId?: string;
  errorCode?: string;
}

export type { IRegisterUserResponse };
