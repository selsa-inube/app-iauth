import { IValidationsUsername } from "@ptypes/api/IValidationsUsername";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { iauthQueryAxiosInstance } from "@api/iauthQuery";

const validateUsername = async (params: IValidateParams): Promise<IValidationsUsername> => {
    const { status } = await iauthQueryAxiosInstance.get<IValidationsUsername>(`/user-accounts/?userAccount=${params.username}`);

    return { status };
};

export { validateUsername };