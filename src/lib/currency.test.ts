// EXEMPLO DE TESTE UNITÁRIO (Vitest)
// Rode com: npm test
import { describe, expect, it } from 'vitest'
import { formatCurrency } from './currency'

// `describe` agrupa testes relacionados.
describe('formatCurrency', () => {
  // `it` é um caso de teste. O texto explica o comportamento esperado.
  it('formata centavos como reais', () => {
    // Padrão AAA ou Triple A  --Apenas um act por teste, pode ter mais de um assert relacionados a um mesmo contexto, não pode ter lógica dentro do teste.
    
    // Arrange (preparar)
    const valorEmCentavos = 1990

    // Act (executar) - chama o que a gnt precisar validar
    const resultado = formatCurrency(valorEmCentavos)

    // Assert (verificar) 
    expect(resultado).toBe('R$ 19,90')
  })

  it('valor negativo', () => {
    const valorNegativo = -100000000;

    const resultado = formatCurrency(valorNegativo);

    expect(resultado).toBe('-R$ 1.000.000,00');
  })

  it('valor em centavos', () => {
    const valorCentavos = 5;

    const resultado = formatCurrency(valorCentavos);

    expect(resultado).toBe('R$ 0,05');
  })
  /* it("centavos", () => {
  expect(formatCurrency(5)).toBe("R$ 0,05")
  })*/

  // TODO: escreva mais casos. Ideias: zero, 5 centavos, R$ 1.234,56, valores negativos...
})
