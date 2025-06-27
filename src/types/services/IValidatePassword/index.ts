interface IValidatePassword {
    success: boolean,
    name: string,
    username: string,
    isLocked: boolean,
    numberAttempts: number
}

export type { IValidatePassword };