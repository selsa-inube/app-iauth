import type { Meta, StoryObj } from '@storybook/react';
import { RequestProcessDesktop } from './index';
import { ERequestStepsStatus } from '@enum/components/ERequestStepsStatus';
import { IRequestSteps } from '@ptypes/components/requestSteps';

const meta: Meta<typeof RequestProcessDesktop> = {
  title: 'Components/Utils/RequestProcessDesktop',
  component: RequestProcessDesktop,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente que muestra el progreso de una solicitud con indicadores visuales, barra de progreso y información del paso actual.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    iconSize: {
      control: 'text',
      description: 'Tamaño del icono para el indicador de progreso',
      defaultValue: '28px',
    },
    stepCurrent: {
      control: 'number',
      description: 'Número del paso actual (1-based)',
    },
    stepCurrentIndex: {
      control: 'number',
      description: 'Índice del paso actual (0-based)',
    },
    requestSteps: {
      control: 'object',
      description: 'Array de pasos de la solicitud con sus estados',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de ejemplo para los stories
const baseSteps: IRequestSteps[] = [
  { name: "Validación inicial", status: ERequestStepsStatus.PENDING },
  { name: "Procesamiento de datos", status: ERequestStepsStatus.PENDING },
  { name: "Verificación de seguridad", status: ERequestStepsStatus.PENDING },
  { name: "Finalización", status: ERequestStepsStatus.PENDING },
];

const stepsInProgress: IRequestSteps[] = [
  { name: "Validación inicial", status: ERequestStepsStatus.COMPLETED },
  { name: "Procesamiento de datos", status: ERequestStepsStatus.COMPLETED },
  { name: "Verificación de seguridad", status: ERequestStepsStatus.PENDING },
  { name: "Finalización", status: ERequestStepsStatus.PENDING },
];

const stepsWithError: IRequestSteps[] = [
  { name: "Validación inicial", status: ERequestStepsStatus.COMPLETED },
  { name: "Procesamiento de datos", status: ERequestStepsStatus.ERROR },
  { name: "Verificación de seguridad", status: ERequestStepsStatus.PENDING },
  { name: "Finalización", status: ERequestStepsStatus.PENDING },
];

const stepsCompleted: IRequestSteps[] = [
  { name: "Validación inicial", status: ERequestStepsStatus.COMPLETED },
  { name: "Procesamiento de datos", status: ERequestStepsStatus.COMPLETED },
  { name: "Verificación de seguridad", status: ERequestStepsStatus.COMPLETED },
  { name: "Finalización", status: ERequestStepsStatus.COMPLETED },
];

export const Initial: Story = {
  args: {
    requestSteps: baseSteps,
    iconSize: '28px',
    stepCurrent: 0,
    stepCurrentIndex: -1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado inicial sin ningún paso completado (0/4 - 0%)',
      },
    },
  },
};

export const FirstStep: Story = {
  args: {
    requestSteps: [
      { name: "Validación inicial", status: ERequestStepsStatus.COMPLETED },
      { name: "Procesamiento de datos", status: ERequestStepsStatus.PENDING },
      { name: "Verificación de seguridad", status: ERequestStepsStatus.PENDING },
      { name: "Finalización", status: ERequestStepsStatus.PENDING },
    ],
    iconSize: '28px',
    stepCurrent: 1,
    stepCurrentIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primer paso completado (1/4 - 25%)',
      },
    },
  },
};

export const InProgress: Story = {
  args: {
    requestSteps: stepsInProgress,
    iconSize: '28px',
    stepCurrent: 2,
    stepCurrentIndex: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Proceso en progreso - dos pasos completados (2/4 - 50%)',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    requestSteps: stepsWithError,
    iconSize: '28px',
    stepCurrent: 2,
    stepCurrentIndex: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Proceso con error en el segundo paso - indicadores en rojo',
      },
    },
  },
};

export const AlmostComplete: Story = {
  args: {
    requestSteps: [
      { name: "Validación inicial", status: ERequestStepsStatus.COMPLETED },
      { name: "Procesamiento de datos", status: ERequestStepsStatus.COMPLETED },
      { name: "Verificación de seguridad", status: ERequestStepsStatus.COMPLETED },
      { name: "Finalización", status: ERequestStepsStatus.PENDING },
    ],
    iconSize: '28px',
    stepCurrent: 3,
    stepCurrentIndex: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Casi completado - tres pasos completados (3/4 - 75%)',
      },
    },
  },
};

export const Completed: Story = {
  args: {
    requestSteps: stepsCompleted,
    iconSize: '28px',
    stepCurrent: 4,
    stepCurrentIndex: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Proceso completado - todos los pasos finalizados (4/4 - 100%) con icono de check',
      },
    },
  },
};

export const LargeIcon: Story = {
  args: {
    requestSteps: stepsInProgress,
    iconSize: '40px',
    stepCurrent: 2,
    stepCurrentIndex: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante con icono más grande (40px)',
      },
    },
  },
};

export const SmallIcon: Story = {
  args: {
    requestSteps: stepsInProgress,
    iconSize: '20px',
    stepCurrent: 2,
    stepCurrentIndex: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante con icono más pequeño (20px)',
      },
    },
  },
};

export const LongStepNames: Story = {
  args: {
    requestSteps: [
      { name: "Validación inicial de documentos y verificación de identidad", status: ERequestStepsStatus.COMPLETED },
      { name: "Procesamiento complejo de datos personales y empresariales", status: ERequestStepsStatus.COMPLETED },
      { name: "Verificación exhaustiva de seguridad y análisis de riesgos", status: ERequestStepsStatus.PENDING },
      { name: "Finalización del proceso y notificación al usuario", status: ERequestStepsStatus.PENDING },
    ],
    iconSize: '28px',
    stepCurrent: 2,
    stepCurrentIndex: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con nombres de pasos largos para probar el comportamiento del texto ellipsis',
      },
    },
  },
};
