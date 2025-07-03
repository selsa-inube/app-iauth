import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { IErrorHandle } from "@ptypes/services/IErrorHandle";

const validatePassword = async (params: IValidateParams): Promise<IValidate | IErrorHandle> => {
    try {
        const { data } = await axiosInstance.post<IValidate | IErrorHandle>('/validate-password', params);
        return data;
    } catch (error: any) {
        return error as IErrorHandle;
    }
};

export { validatePassword };
