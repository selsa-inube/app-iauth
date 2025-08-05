// Respuesta exitosa (200)
interface IOriginatorSuccess {
  backgroundImageUrl: string;
  brandUrl: string;
  htmlNews: string;
  logoUrl: string;
}

// Respuesta de error (400/500)
interface IOriginatorError {
  code: string;
  description: string;
  errors: string[];
  helpUrl: string;
  message: string;
  originalCode: string;
}

export type { IOriginatorSuccess, IOriginatorError };
