import type { Meta, StoryObj } from '@storybook/react';
import { RegisterProgressModal } from './index';
import { IRegisterUserParams } from '@ptypes/api/IRegisterUserParams';
import { registerProgressModal } from '@config/register/modal/registerProgress';

const meta: Meta<typeof RegisterProgressModal> = {
  title: 'Components/Register/RegisterProgressModal',
  component: RegisterProgressModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Modal que maneja el proceso de registro de usuario, mostrando el progreso y manejando estados de éxito y error. Utiliza configuraciones de texto centralizadas desde: ${registerProgressModal.title}`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isMobile: {
      control: 'boolean',
      description: 'Indica si el modal debe adaptarse para dispositivos móviles',
    },
    registerParams: {
      control: 'object',
      description: 'Parámetros necesarios para el registro del usuario',
    },
    onModalClose: {
      action: 'onModalClose',
      description: 'Función callback ejecutada cuando el modal se cierra',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockRegisterParams: IRegisterUserParams = {
  formData: {
    username: 'juanperez',
    password: 'SecurePass123!',
    confirmPassword: 'SecurePass123!',
    email: 'user@example.com',
    phone: '3001234567',
    phoneCountryCode: '+57',
    isWhatsappUsed: true,
    whatsappPhone: '3001234567',
    whatsappPhoneCountryCode: '+57',
    securityAnswers: {
      'question1': 'Respuesta de seguridad 1',
      'question2': 'Respuesta de seguridad 2',
    },
    dataTreatmentAccepted: true,
    dataIdentityAccepted: true,
  },
  userData: {
    documentType: 'CC',
    documentNumber: '12345678',
    firstName: 'Juan',
    lastName: 'Pérez',
    originatorId: 'ORG001',
    originatorCode: 'BANK123',
    originatorName: 'Banco Ejemplo',
  },
  originatorId: 'ORG001',
  originatorCode: 'BANK123',
};

export const Default: Story = {
  args: {
    isMobile: false,
    registerParams: mockRegisterParams,
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal de progreso de registro en modo desktop con datos de ejemplo.',
      },
    },
  },
};

export const Mobile: Story = {
  args: {
    isMobile: true,
    registerParams: mockRegisterParams,
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal de progreso de registro adaptado para dispositivos móviles.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithCallback: Story = {
  args: {
    isMobile: false,
    registerParams: mockRegisterParams,
    onModalClose: () => console.log('Modal cerrado'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal con función de callback para manejo del cierre.',
      },
    },
  },
};