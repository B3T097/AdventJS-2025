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

## Día 2 — Lista de producción de juguetes
- Descripción: La fábrica recibe líneas con `toy` y `quantity`. Devuelve un array de strings con cada juguete repetido tantas veces como indique `quantity`, en el mismo orden, ignorando cantidades no válidas (menores o iguales a 0, o que no sean número).
- Solución en: `dia-2.ts` (función `manufactureGifts` en `dia-2.ts:1`)
- Ejemplos:
```ts
const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]
const result1 = manufactureGifts(production1)
console.log(result1)

const production2 = [
  { toy: 'train', quantity: 0 },
  { toy: 'bear', quantity: -2 },
  { toy: 'puzzle', quantity: 1 }
]
const result2 = manufactureGifts(production2)
console.log(result2)

const production3: Array<{ toy: string, quantity: number }> = []
const result3 = manufactureGifts(production3)
console.log(result3)
```
