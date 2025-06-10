import React, { useState } from 'react';
import { validateRequiredField } from '../../validations/fieldsValidations';
import { StyledMdOutlinePersonOutline, StyledMdLockOutline } from "../../test/styles";
import { IInput } from '@inubekit/inubekit';
import { validateUsername } from '../../services/validateUsername';
import { validatePassword } from '../../services/validatePassword';

type FormStep = 'usernameInput' | 'passwordInput' | 'loginSuccess';
interface FormStepLabels {
    mainLabel: string;
    subMainLabel: string;
    inputLabel: string;
    inputPlaceholder: string;
    inputType: IInput['type'];
    inputId: string;
    inputIcon: React.ReactNode;
    linkLabel: string;
    messageError?: string;
};

const labelsUserName: FormStepLabels = {
    mainLabel: 'Servicio de identidad',
    subMainLabel: 'Por favor, ingresa tu cuenta de usuario',
    inputLabel: 'Cuenta de usuario',
    inputPlaceholder: 'Usuario',
    inputType: 'text',
    inputId: 'userName',
    inputIcon: <StyledMdOutlinePersonOutline />,
    linkLabel: '¿Olvidaste tu usuario?',
    messageError: 'El usuario es requerido.'
}

const labelsPassword: FormStepLabels = {
    mainLabel: 'Bienvenido, ',
    subMainLabel: 'Ahora, ingresa tu contraseña',
    inputLabel: 'Contraseña',
    inputPlaceholder: 'Clave',
    inputType: 'password',
    inputId: 'userPassword',
    inputIcon: <StyledMdLockOutline />,
    linkLabel: '¿Olvidaste tu contraseña?',
    messageError: 'La contraseña es requerida.'
}


interface StepValidationConfig {
    labelsObject: FormStepLabels;
    validationFn: (value: string) => boolean;
    errorMessage: string;
    nextStep: FormStep;
    onSuccess: () => void;
};
const useTwoStepLoginForm = () => {
    const [currentStep, setCurrentStep] = useState<FormStep>('usernameInput');
    const [inputValid, setInputValid] = useState<boolean | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [labels, setLabels] = useState<FormStepLabels>(labelsUserName);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isValid = validateRequiredField(e.target.value);
        // Reset to the default error in case a previous submission failed with a different error.
        switch (currentStep) {
            case 'usernameInput':
                labelsUserName.messageError = 'El usuario es requerido.';
                break;
            case 'passwordInput':
                labelsUserName.messageError = 'La contraseña es requerida.';
                break;
            default:
                break;
        }

        setInputValue(e.target.value)
        setInputValid(isValid)
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        switch (currentStep) {
            case 'usernameInput':
                handleStepValidation({
                    labelsObject: labelsUserName,
                    validationFn: validateUsername,
                    errorMessage: 'El usuario no existe o está mal escrito.',
                    nextStep: 'passwordInput',
                    onSuccess: () => {
                        setUserName(inputValue);
                        labelsPassword.mainLabel = `Bienvenido, ${inputValue}`;
                        setLabels(labelsPassword);
                        setInputValue('');
                    },
                });
                break;

            case 'passwordInput':
                handleStepValidation({
                    labelsObject: labelsPassword,
                    validationFn: validatePassword,
                    errorMessage: 'Contraseña incorrecta.',
                    nextStep: 'loginSuccess',
                    onSuccess: () => {
                        alert('¡Login exitoso!');
                        setInputValue('');
                    },
                });
                break;
            default:
                break;
        }
    }

    const handleStepValidation = (config: StepValidationConfig) => {
        if (!validateRequiredField(inputValue)) {
            setInputValid(false);
            config.labelsObject.messageError = 'Este campo es requerido.';
            setLabels(config.labelsObject);
            return;
        }

        if (!config.validationFn(inputValue)) {
            setInputValid(false);
            config.labelsObject.messageError = config.errorMessage;
            setLabels(config.labelsObject);
            return;
        }

        config.onSuccess();
        setCurrentStep(config.nextStep);
        setInputValid(null);
    };

    return {
        currentStep,
        userName,
        handleInputChange,
        handleSubmit,
        labels,
        inputValid,
        inputValue
    };
};

export { useTwoStepLoginForm };