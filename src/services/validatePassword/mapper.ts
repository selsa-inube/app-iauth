import { IValidatePassword } from "@ptypes/services/IValidatePassword";

const mapValidatePassword = (data: IValidatePassword) => {
    const validationResult = {
        success: data.success,
        name: data.name,
        username: data.username,
        isLocked: data.isLocked,
        numberAttempts: data.numberAttempts
    };
    return validationResult;
};

export { mapValidatePassword };