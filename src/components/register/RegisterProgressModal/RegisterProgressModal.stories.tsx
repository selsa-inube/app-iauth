import type { Meta, StoryObj } from '@storybook/react-vite';
import { RegisterProgressModal } from './index';
import { ERequestStepsStatus } from '@enum/components/ERequestStepsStatus';
import { ERegistrationState } from '@enum/hooks/ERegistrationState';
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
    registrationState: {
      control: 'text',
      description: 'Estado del registro (processing, success, error)',
    },
    progressSteps: {
      control: 'object',
      description: 'Pasos de progreso de la solicitud',
    },
    onModalClose: {
      action: 'onModalClose',
      description: 'Función callback ejecutada cuando el modal se cierra',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockProgressSteps = [
  { name: 'Enviando solicitud', status: ERequestStepsStatus.COMPLETED },
  { name: 'Usuario creado', status: ERequestStepsStatus.PENDING },
];

export const Default: Story = {
  args: {
    isMobile: false,
    registrationState: ERegistrationState.PROCESSING,
    progressSteps: mockProgressSteps,
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
    registrationState: ERegistrationState.PROCESSING,
    progressSteps: mockProgressSteps,
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
    registrationState: ERegistrationState.SUCCESS,
    progressSteps: [
      { name: 'Enviando solicitud', status: ERequestStepsStatus.COMPLETED },
      { name: 'Usuario creado', status: ERequestStepsStatus.COMPLETED },
    ],
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
