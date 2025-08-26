import { useCallback, useState } from "react";
import { registerUser } from "@services/registerUser";
import { IRegisterUserParams } from "../../types/api/IRegisterUserParams";
import { IRegisterUserResponse } from "../../types/api/IRegisterUserResponse";

interface IUseRegisterUser {
  registerUserSubmit: (params: IRegisterUserParams) => Promise<IRegisterUserResponse>;
  isLoading: boolean;
  error: string | null;
}

const useRegisterUser = (): IUseRegisterUser => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const registerUserSubmit = useCallback(
        async (params: IRegisterUserParams): Promise<IRegisterUserResponse> => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await registerUser(params);
                return response;
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "Error desconocido al registrar usuario";
                setError(errorMessage);
                throw err;
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    return {
        registerUserSubmit,
        isLoading,
        error,
    };
};

export { useRegisterUser };
export type { IUseRegisterUser };
