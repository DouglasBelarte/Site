# Padrões Tipográficos Belarte - Conhecimento Crítico

## ⚠️ Correção de Estilo de Títulos Belarte

### Regras Obrigatórias para Títulos Principais

1. **Tipografia Limpa e Sólida**
   - Os títulos principais (ex.: "Summer '26") DEVEM ser exibidos com tipografia limpa, sólida
   - **PROIBIDO**: contorno, stroke, efeito vazado ou hollow
   - **OBRIGATÓRIO**: fonte sólida e legível

2. **Fonte Correta**
   - **Fonte para títulos**: Bandar (sólida)
   - **Peso**: Normal (não bold, não light)
   - **Aplicação**: Sem qualquer efeito de stroke ou outline

3. **Apóstrofo Tipográfico**
   - **Correto**: ' (apóstrofo tipográfico curvo)
   - **Incorreto**: ' (apóstrofo simples reto)
   - **Exemplo**: "Summer '26" (não "Summer '26")

4. **Fundo dos Títulos**
   - **Cor de fundo**: Champagne (#F7E7CE)
   - **Aplicação**: Fundo sólido atrás do texto
   - **Padding**: Adequado para legibilidade

5. **Exemplos de Implementação**

   **✅ CORRETO:**
   ```css
   .hero-title {
       font-family: 'Bandar', serif;
       background-color: #F7E7CE;
       color: #3D2914;
       -webkit-text-stroke: none !important;
       text-stroke: none !important;
       font-weight: normal !important;
   }
   ```

   **❌ INCORRETO (PROIBIDO):**
   ```css
   .hero-title {
       -webkit-text-stroke: 2px white; /* PROIBIDO */
       text-shadow: 0 0 10px white; /* PROIBIDO */
       font-weight: 100; /* PROIBIDO - muito fino */
   }
   ```

6. **Implementação Anti-Stroke**
   - Sistema de MutationObserver para remover strokes dinâmicos
   - Regras CSS com !important para forçar estilo sólido
   - Verificação contínua de elementos com fonte Bandar

### Cores Aprovadas

- **Champagne**: #F7E7CE (fundo de títulos)
- **Rose Quartz**: #B76E79 (elementos de destaque)
- **Antique Gold**: #C8A165 (botões primários)
- **Dark Brown**: #3D2914 (texto principal)

### Checklist de Implementação

- [ ] Título usa fonte Bandar sólida
- [ ] Apóstrofo tipográfico (') implementado
- [ ] Fundo champagne (#F7E7CE) aplicado
- [ ] Anti-stroke CSS implementado
- [ ] JavaScript anti-stroke ativo
- [ ] Teste visual confirmado
- [ ] Responsividade verificada

### Notas Técnicas

- Sempre usar `!important` nas regras anti-stroke
- Implementar tanto em CSS quanto em JavaScript
- Testar em diferentes navegadores
- Verificar em dispositivos móveis
- Monitorar mudanças dinâmicas no DOM

---

**Data de Criação**: 27/09/2024  
**Versão**: 1.0  
**Status**: Implementado e Ativo
