import type { Meta, StoryObj } from '@storybook/react';
import { RequestProcessModal } from './index';
import { ERequestStepsStatus } from '@enum/components/ERequestStepsStatus';
import { IRequestSteps } from '@ptypes/components/requestSteps';
import { useState } from 'react';
import { Button } from '@inubekit/inubekit';
import styled from 'styled-components';

const StyledPadded = styled.div`
  padding: 20px;
`;

const StyledControls = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const StyledAlert = styled.div`
  padding: 12px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  font-weight: bold;
`;

const StyledToolbar = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledNote = styled.div`
  margin-top: 8px;
  padding: 8px;
  background-color: #f8f9fa;
  border-left: 4px solid #007bff;
  font-style: italic;
`;

const StyledInfo = styled.div`
  margin-bottom: 20px;
`;

const meta: Meta<typeof RequestProcessModal> = {
  title: 'Components/Modals/RequestProcessModal',
  component: RequestProcessModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Modal que muestra el progreso de una solicitud con overlay de fondo oscuro. Incluye el componente RequestProcessDesktop integrado y botón opcional de finalización.',
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
    isMobile: {
      control: 'boolean',
      description: 'Indica si el modal debe adaptarse para dispositivos móviles',
    },
    title: {
      control: 'text',
      description: 'Título del modal',
    },
    description: {
      control: 'text',
      description: 'Descripción o mensaje del proceso',
    },
    requestSteps: {
      control: 'object',
      description: 'Array de pasos de la solicitud con sus estados',
    },
    onComplete: {
      action: 'onComplete',
      description: 'Función callback ejecutada cuando el usuario hace clic en "Entendido" al completar todos los pasos',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de ejemplo
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

// Wrapper component para manejar el estado del modal en Storybook
const ModalWrapper = ({ children, ...props }: any) => {
  return (
    <div>
      <div id="modal-portal" />
      {children(props)}
    </div>
  );
};

export const Initial: Story = {
  render: (args) => (
    <ModalWrapper>
      {(props: any) => (
        <RequestProcessModal {...args} {...props} portalId="modal-portal" />
      )}
    </ModalWrapper>
  ),
  args: {
    requestSteps: baseSteps,
    iconSize: '28px',
    isMobile: false,
    title: 'Procesando solicitud',
    description: 'Tu solicitud está siendo procesada. Por favor espera mientras completamos los pasos necesarios.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal en estado inicial sin pasos completados',
      },
    },
  },
};

export const InProgress: Story = {
  render: (args) => (
    <ModalWrapper>
      {(props: any) => (
        <RequestProcessModal {...args} {...props} portalId="modal-portal" />
      )}
    </ModalWrapper>
  ),
  args: {
    requestSteps: stepsInProgress,
    iconSize: '28px',
    isMobile: false,
    title: 'Procesando solicitud',
    description: 'Tu solicitud está en progreso. Hemos completado 2 de 4 pasos necesarios.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal mostrando progreso con algunos pasos completados',
      },
    },
  },
};

export const WithError: Story = {
  render: (args) => (
    <ModalWrapper>
      {(props: any) => (
        <RequestProcessModal {...args} {...props} portalId="modal-portal" />
      )}
    </ModalWrapper>
  ),
  args: {
    requestSteps: stepsWithError,
    iconSize: '28px',
    isMobile: false,
    title: 'Error en el procesamiento',
    description: 'Se ha encontrado un error durante el procesamiento. Por favor revisa la información proporcionada.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal mostrando un error en el proceso con indicadores visuales en rojo',
      },
    },
  },
};

export const Completed: Story = {
  render: (args) => (
    <ModalWrapper>
      {(props: any) => (
        <RequestProcessModal {...args} {...props} />
      )}
    </ModalWrapper>
  ),
  args: {
    requestSteps: stepsCompleted,
    iconSize: '28px',
    isMobile: false,
    title: 'Solicitud completada',
    description: '¡Excelente! Tu solicitud ha sido procesada exitosamente. Todos los pasos han sido completados.',
    onComplete: () => alert('¡Proceso completado! Callback ejecutado.'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal mostrando proceso completado con icono de check verde y botón "Entendido" para finalizar',
      },
    },
  },
};

export const Mobile: Story = {
  render: (args) => (
    <ModalWrapper>
      {(props: any) => (
        <RequestProcessModal {...args} {...props} />
      )}
    </ModalWrapper>
  ),
  args: {
    requestSteps: stepsInProgress,
    iconSize: '24px',
    isMobile: true,
    title: 'Procesando',
    description: 'Tu solicitud está en progreso.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión móvil del modal con tamaños y espaciados adaptados',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const LongContent: Story = {
  render: (args) => (
    <ModalWrapper>
      {(props: any) => (
        <RequestProcessModal {...args} {...props} portalId="modal-portal" />
      )}
    </ModalWrapper>
  ),
  args: {
    requestSteps: [
      { name: "Validación exhaustiva de documentos y verificación de identidad del usuario", status: ERequestStepsStatus.COMPLETED },
      { name: "Procesamiento complejo de datos personales, empresariales y financieros", status: ERequestStepsStatus.COMPLETED },
      { name: "Verificación de seguridad avanzada y análisis de riesgos automatizado", status: ERequestStepsStatus.PENDING },
      { name: "Finalización del proceso y envío de notificaciones correspondientes", status: ERequestStepsStatus.PENDING },
    ],
    iconSize: '28px',
    isMobile: false,
    title: 'Procesamiento avanzado de solicitud empresarial',
    description: 'Tu solicitud está siendo procesada mediante nuestro sistema avanzado de verificación. Este proceso puede tardar varios minutos debido a la complejidad de las validaciones requeridas para garantizar la seguridad y precisión de la información.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal con contenido extenso para probar el manejo de texto largo',
      },
    },
  },
};

export const WithCompleteButton: Story = {
  render: () => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    
    const handleComplete = () => {
      setMessage('¡Función onComplete ejecutada exitosamente!');
      setShowModal(false);
      setTimeout(() => setMessage(''), 3000);
    };

    return (
      <StyledPadded>
        <StyledControls>
          <Button onClick={() => setShowModal(true)}>
            Mostrar Modal Completado
          </Button>
          
          {message && (
            <StyledAlert>
              {message}
            </StyledAlert>
          )}
        </StyledControls>

        {showModal && (
          <RequestProcessModal
            requestSteps={stepsCompleted}
            iconSize="28px"
            isMobile={false}
            title="Proceso Completado - Con Callback"
            description="Todos los pasos han sido completados exitosamente. Haz clic en 'Entendido' para ejecutar la función callback."
            onComplete={handleComplete}
          />
        )}
      </StyledPadded>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demostración del botón "Entendido" que aparece cuando todos los pasos están completados. Al hacer clic ejecuta la función onComplete.',
      },
    },
  },
};

// Story para demostrar las validaciones defensivas
export const EmptySteps: Story = {
  render: (args) => (
    <ModalWrapper>
      {(props: any) => (
        <RequestProcessModal {...args} {...props} />
      )}
    </ModalWrapper>
  ),
  args: {
    requestSteps: [],
    iconSize: '28px',
    isMobile: false,
    title: 'Estado de Carga',
    description: 'Preparando información...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal mostrando estado de carga cuando no hay pasos disponibles (validación defensiva).',
      },
    },
  },
};

// Story interactiva para demostrar funcionalidad
export const Interactive: Story = {
  render: () => {
    const [showModal, setShowModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [lastAction, setLastAction] = useState('');
    
    const steps = [
      { name: "Validación inicial", status: ERequestStepsStatus.PENDING },
      { name: "Procesamiento de datos", status: ERequestStepsStatus.PENDING },
      { name: "Verificación de seguridad", status: ERequestStepsStatus.PENDING },
      { name: "Finalización", status: ERequestStepsStatus.PENDING },
    ];

    const getStepsWithProgress = (step: number) => {
      return steps.map((s, index) => ({
        ...s,
        status: index < step ? ERequestStepsStatus.COMPLETED : ERequestStepsStatus.PENDING
      }));
    };

    const nextStep = () => {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
        setLastAction(`Avanzado al paso ${currentStep + 1}`);
      }
    };

    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
        setLastAction(`Retrocedido al paso ${currentStep - 1}`);
      }
    };

    const reset = () => {
      setCurrentStep(0);
      setLastAction('Proceso reiniciado');
    };

    const handleComplete = () => {
      setLastAction('¡Proceso completado! Callback onComplete ejecutado');
      setShowModal(false);
      setTimeout(() => {
        setCurrentStep(0);
        setLastAction('');
      }, 2000);
    };

    const allStepsCompleted = currentStep >= steps.length;

    return (
      <StyledPadded>
        <StyledToolbar>
          <Button onClick={() => setShowModal(true)}>
            Mostrar Modal
          </Button>
          <Button onClick={() => setShowModal(false)} variant="outlined">
            Cerrar Modal
          </Button>
          <Button onClick={nextStep} disabled={currentStep >= steps.length}>
            Siguiente Paso
          </Button>
          <Button onClick={prevStep} disabled={currentStep <= 0}>
            Paso Anterior
          </Button>
          <Button onClick={reset} variant="outlined">
            Reiniciar
          </Button>
        </StyledToolbar>

        <StyledInfo>
          <div><strong>Paso actual:</strong> {currentStep} de {steps.length}</div>
          <div><strong>Estado:</strong> {allStepsCompleted ? 'Todos los pasos completados - Botón "Entendido" visible' : 'En progreso'}</div>
          {lastAction && (
            <StyledNote>
              {lastAction}
            </StyledNote>
          )}
        </StyledInfo>

        {showModal && (
          <RequestProcessModal
            requestSteps={getStepsWithProgress(currentStep)}
            iconSize="28px"
            isMobile={false}
            title="Proceso Interactivo"
            description={`Progreso actual: ${currentStep} de ${steps.length} pasos completados. ${allStepsCompleted ? 'Haz clic en "Entendido" para finalizar.' : 'Usa los botones para controlar el progreso.'}`}
            onComplete={allStepsCompleted ? handleComplete : undefined}
          />
        )}
      </StyledPadded>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demo interactivo que permite controlar el progreso del modal con botones. Cuando todos los pasos están completados, aparece el botón "Entendido".',
      },
    },
  },
};
