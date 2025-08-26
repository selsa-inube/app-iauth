import { IRegisterUserParams } from "../../types/api/IRegisterUserParams";
import { IRegisterUserResponse } from "../../types/api/IRegisterUserResponse";
// import { iauthQueryAxiosInstance } from "@api/iauthQuery";
// import { AxiosRequestConfig } from "axios";

const registerUser = async (
  params: IRegisterUserParams,
): Promise<IRegisterUserResponse> => {
  // TODO: Implementar petición real cuando esté lista la API
  // const config: AxiosRequestConfig = {
  //   headers: {
  //     "X-Business-Unit": "test",
  //     "X-Action": "RegisterUser",
  //   },
  // };

  // const url = `/iauth-query-process-service-service/api/users/register`;
  // const { data } = await iauthQueryAxiosInstance.post<IRegisterUserResponse>(url, params, config);
  // return data;

  console.log("Registering user with data:", params);

  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Mock: Simular éxito o error basado en el username
  // Si el username contiene "error", simular un error
  if (params.formData.username.toLowerCase().includes('error')) {
    return {
      success: false,
      message: "Error al crear la cuenta. El nombre de usuario ya existe.",
      errorCode: "USER_ALREADY_EXISTS"
    };
  }

  // Simular éxito
  return {
    success: true,
    message: "Usuario registrado exitosamente",
    userId: `user_${Date.now()}`
  };
};

export { registerUser };
