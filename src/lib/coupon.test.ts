import { describe, expect, it } from "vitest";
import { validateCoupon } from "./coupon";

describe("coupon", () => {
    it('dá desconto de 50 reais', () => {  
        const nomeCoupon = 'DESCONTO50';
        const valor = 50000;

        const resultado = validateCoupon(nomeCoupon);

        expect(resultado).toBe(valor)
    })
})