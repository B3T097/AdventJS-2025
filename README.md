# AdventJS

Repositorio para resolver los retos diarios de AdventJS, el calendario de adviento de programación. Cada día se añade un ejercicio nuevo y aquí se guardan las soluciones en TypeScript.

## Objetivo
- Practicar algoritmos y estructuras de datos con retos cortos.
- Mantener un historial claro de soluciones por día.
- Fomentar lectura y mejora continua de código.

## Estructura del proyecto
- Archivos por día en la raíz: `dia-1.ts`, `dia-2.ts`, `dia-3.ts`, etc.
- Cada archivo implementa la solución del reto correspondiente y puede incluir casos de ejemplo con `console.log`.

## Requisitos
- Node.js 18+ o 20+ instalado.
- Opcional:
  - ts-node para ejecutar TypeScript sin compilar.
  - Bun o Deno, que ejecutan TypeScript de forma nativa.

## Puesta en marcha

### Opción Node.js + ts-node
```bash
npm init -y
npm install -D typescript ts-node
npx tsc --init
```
Para ejecutar un día:
```bash
npx ts-node dia-1.ts
```

### Opción Bun
```bash
bun run dia-1.ts
```

### Opción Deno
```bash
deno run --allow-read dia-1.ts
```

## Ejecución de un reto
- Añade la solución en el archivo del día y ejecuta el archivo para ver la salida.
- Ejemplo mínimo:
```ts
function solve(input: unknown) {
  return input;
}

console.log(solve('ejemplo'));
```

## Buenas prácticas
- Nombres descriptivos para funciones y variables.
- Casos de prueba rápidos con `console.log` o arrays de ejemplos.
- Complejidad razonable y soluciones legibles antes que micro-optimización prematura.

## Recursos
- AdventJS: https://adventjs.dev
- Comunidad y soluciones: busca el hashtag AdventJS en redes para comparar enfoques.

## Créditos
- Iniciativa creada por la comunidad de desarrollo hispanohablante. Este repositorio está orientado a uso personal y aprendizaje.

