import { validateUsernameMock } from "@config/mocks/service/validateUsernameMock";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";

const validateUsername = async (params: IValidateParams): Promise<IValidate> => {
    const data = validateUsernameMock;
    
    return data;
};

export { validateUsername };