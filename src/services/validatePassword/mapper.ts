import { IValidatePassword } from "@ptypes/services/IValidatePassword";

const mapValidatePassword = (data: IValidatePassword) => {
    const validationResult = {
        authenticationCode: data.authenticationCredential,
        callbackUrl: data.callbackUrl,
    };
    return validationResult;
};

export { mapValidatePassword };