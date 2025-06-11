import React, { useState } from 'react';
import { validateRequiredField } from '../../validations/fieldsValidations';
import { validateUsername } from '../../services/validateUsername';
import { validatePassword } from '../../services/validatePassword';
import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels'
import { IFormStep, IStepValidationConfig } from '@ptypes/hooks/IStepValidationConfig';
import { labelsPassword, labelsUserName } from '@config/login/labels';






const useTwoStepLoginForm = () => {
    const [currentStep, setCurrentStep] = useState<IFormStep>('usernameInput');
    const [inputValid, setInputValid] = useState<boolean | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [labels, setLabels] = useState<IFormStepLabels>(labelsUserName);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        switch (currentStep) {
            case 'usernameInput':
                await handleStepValidation({
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
                await handleStepValidation({
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

    const handleStepValidation = async (config: IStepValidationConfig) => {
        if (!validateRequiredField(inputValue)) {
            setInputValid(false);
            config.labelsObject.messageError = 'Este campo es requerido.';
            setLabels(config.labelsObject);
            return;
        }

        const respose = await config.validationFn(inputValue, userName);

        if (!respose.success) {
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