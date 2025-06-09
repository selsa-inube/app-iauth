import React, { useEffect, useRef, useState } from 'react';
import { validateRequiredField } from '../../validations/fieldsValidations';
import { StyledMdOutlinePersonOutline,  StyledMdLockOutline } from "../../test/styles";
import { IInput } from '@inubekit/inubekit';
import { valietateUsername } from '../../services/validateUsername';

type FormStep = 'usernameInput' | 'passwordInput' | 'loginSuccess';
type FormStepLabels = {
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

const labelsUserName:FormStepLabels = {
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

let labelsPassword:FormStepLabels = {
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
const useTwoStepLoginForm = () => {
    const [currentStep, setCurrentStep] = useState<FormStep>('usernameInput');
    const [inputValid, setInputValid ] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [labels, setLabels] = useState<FormStepLabels>(labelsUserName);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let isValid = validateRequiredField(e.target.value);
        setInputValue(e.target.value)
        if (isValid)  {
            return;
        }
        setInputValid(isValid)
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(currentStep === 'usernameInput') {
            setUserName(inputValue)
            const isUsernameValid = valietateUsername(inputValue);
            isUsernameValid ? setCurrentStep('passwordInput') : '';
        }
    }
    // Update labels based on the current step
    useEffect(() => {
        switch (currentStep) {
            case 'usernameInput':
                setLabels(labelsUserName);
                break;
            case 'passwordInput':
                labelsPassword.mainLabel = `Bienvenido, ${userName}`;
                setLabels(labelsPassword);
                setInputValue('');
                break;
            default:
                setLabels(labelsUserName);
        }
    }, [currentStep]);

    return {
        currentStep,
        userName,
        handleInputChange,
        handleSubmit,
        labels,
        inputRef,
        inputValid,
        inputValue
    };
};

export { useTwoStepLoginForm };