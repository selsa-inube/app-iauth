# Box

Esta librería publica el componente `<Box />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Box } from "@inubekit/inubekit";
```

## Props

### margin (opcional)

Controla el margen alrededor del componente. Considera lo siguiente:

1. **Por defecto:**: "0px".
2. Puedes pasar cualquier cadena siempre que sea un valor válido para la propiedad CSS `margin`.
3. El componente funciona utilizando `box-sizing: "border-box"`.

### padding (opcional)

Controla el padding al interior del componente. Considera lo siguiente:

1. **Por defecto:**: "16px".
2. Puedes pasar cualquier cadena siempre que sea un valor válido para la propiedad CSS `padding`.
3. El componente funciona utilizando `box-sizing: "border-box"`.

### width (opcional)

Controla el ancho del componente. Considera lo siguiente:

1. **Por defecto:**: `undefined`. Esto significa que se comporta como un `<div>`.
2. Puedes pasar cualquier cadena siempre que sea un valor válido para la propiedad CSS `width`.
3. El componente funciona utilizando `box-sizing: "border-box"`.

### height (opcional)

Controla la altura del componente. Considera lo siguiente:

1. **Por defecto:**: `undefined`. Esto significa que se comporta como un `<div>`.
2. Puedes pasar cualquier cadena siempre que sea un valor válido para la propiedad CSS `height`.
3. El componente funciona utilizando `box-sizing: "border-box"`.

### borderRadius (opcional)

Controla el radio de las esquinas del componente. Considera lo siguiente:

1. **Por defecto:**: "8px".
2. Puedes pasar cualquier cadena siempre que sea un valor válido para la propiedad CSS `border-radius`.

## Personalización

### Tokens

Puedes consultar la lista de tokens en [TOKENS.md](./TOKENS.md)

### Cambiando tokens

Puedes cambiar la presentación del componente ajustando sus tokens. Esta modificación tiene las siguientes restricciones:

1. Debes utilizar la estructura de tokens actual, ya que el estilo del componente depende de esa estructura de datos para obtener los valores.
2. Los tokens se basan en la estructura de tokens de palette. Esto significa que la unidad de negocio debe tener ya un conjunto de colores definidos como palette, y esos colores sirven como opciones para ser asignadas aquí.

> 💡 Para ver más detalles sobre la estructura de tokens de paleta, consulta el componente **Foundations** en la librería.
