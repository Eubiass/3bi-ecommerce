import { describe, expect, it } from "vitest";
import { calculateShipping } from "./shipping";

describe("shipping", () => {
    it('dá frete grátis para R$ 200,00 exatos', () => {
        const valor = 20000;
        const cep = "01001-000";

        const resultado = calculateShipping(cep, valor);

        expect(resultado).toBe(0);
    });

    // Compara os CEP's por região
    it.each([
        ['01234-567', 1500],
        ['81234-567', 2000],
        ['71234-567', 2500],
        ['41234-567', 3000]
    ])("CEP %s paga frete de %d", (cep, valor) => {
        const totalPedido = 5000;
        
        const resultado = calculateShipping(cep, totalPedido);

        expect(resultado).toBe(valor);
        // .toBeGreaterThanOrEqual(valor)
        // .toBeLessThanOrEqual(valor)
    })
});