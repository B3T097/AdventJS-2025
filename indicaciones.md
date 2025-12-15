# Indicaciones de ejercicios AdventJS

Este documento lista los ejercicios que irás compartiendo por este chat y cómo ejecutarlos en este repositorio.

## Cómo ejecutar
- Ejecuta el archivo del día directamente:
  - `npx ts-node dia-1.ts` (Node.js + ts-node)
  - `bun run dia-1.ts` (Bun)
  - `deno run --allow-read dia-1.ts` (Deno)

## Día 1 — Filtrar regalos defectuosos
- Descripción: Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter `#`. Escribe una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.
- Solución en: `dia-1.ts` (función `filterGifts` en `dia-1.ts:1`)
- Ejemplos:
```ts
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3: string[] = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []
```

