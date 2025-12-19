# Copilot instructions

## Core front-end standards
- Keep each interface in its own folder under `src/types`, mirroring the UI path (`<component>/interface` → `types/<component>/<InterfaceName>/index.ts`). The `export` statements must appear at the bottom of the file.
- Avoid inline `style` props. Build all presentation with `styled-components`, naming every styled primitive with the `Styled` prefix.
- Never hardcode UI copy. Pull strings from a dedicated `labels` file located in `src/config/<mirror_path>/labels.ts` (or similar) that reflects the consuming component structure.
- Don’t drop raw color values into components. Consume tokens from the global theme; if a fallback is required, define a local `tokens.ts` that re-exports Inube tokens.
- Skip explanatory code comments. Only keep JSDoc or comments for truly exceptional cases.
- Concentrate component logic (state, hooks, orchestration) inside each folder’s `index.tsx`. That entry point should compose the UI layer and handle data flow.
- Limit `interface.tsx` to pure presentation: accept typed props, render markup, no side-effects or business logic.

## Data access & services
- Whenever a new backend domain is needed, create a dedicated client instance (e.g., axios) under `src/api/<domain>` with the right headers and configuration.
- Expose service functions in `src/services/<domain>` that wrap the instance and provide the operations the UI needs.
- Keep hooks or components consuming services thin; they should call the service, manage loading/error state, and pass data down.

## Imports
- Prefer Vite path aliases for cross-domain imports and deep module access. Reserve relative paths for sibling files within the same folder level.
