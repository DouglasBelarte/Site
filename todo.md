# Portal Doug Preview - TODO (Pré-Lançamento)

## ✅ FUNCIONALIDADES IMPLEMENTADAS

### Core do Portal
- [x] Estrutura completa de páginas (Home, DAD, MRD, EAD, LAB, Info, Login, Clipping, Manifesto)
- [x] Sistema de roteamento funcional
- [x] Header global com logos por seção (200x85px)
- [x] Breadcrumbs em todas as páginas ("Home Doug Co." como início)
- [x] Footer responsivo
- [x] Cookie bar e scroll to top
- [x] Formulários de contato funcionais

### Temas e Cores
- [x] LOCK MODE implementado (tema escuro matriz LAB)
- [x] Tema escuro: header cinza #2e2e2e, body preto #000
- [x] Tema claro: header #f5f5f5, body branco #fff
- [x] Detecção automática de tema do sistema
- [x] Alternância manual de tema funcional
- [x] Persistência de tema no localStorage
- [x] Logos alternando por tema (dark/light)
- [x] Paleta de cores oficial aplicada:
  - HOME: Cinza Escuro (RGB 114/115/118) + Laranja (RGB 245/135/79)
  - DAD: Azul (RGB 44/110/181) + Laranja
  - MRD: Verde (RGB 0/168/89) + Laranja
  - EAD: Roxo (RGB 121/69/142) + Laranja
  - LAB: Preto (RGB 0/0/0) + Amarelo (RGB 255/204/41)

### Multilíngue
- [x] Sistema PT/EN/FR implementado
- [x] Detecção automática de idioma do navegador
- [x] Dropdown de seleção de idioma funcional
- [x] Persistência de idioma no localStorage
- [x] Traduções ativas em 7 páginas principais (Home, DAD, MRD, EAD, LAB, Info, Manifesto)

### Home
- [x] Carrossel hero com 6 slides (auto-play 5s, fade transition)
- [x] Navegação por pontos
- [x] Hover zoom nas imagens
- [x] Links para subpáginas (slides 3-6)
- [x] Seções completas: Sobre Doug, Nossas Frentes, Pilares, Resultados, CTA
- [x] Efeito parallax nos cards com imagens
- [x] Menu dropdown inteligente (hover sobre Design, Mundo Roça, EAD, LAB)

### Páginas Específicas
- [x] DAD: página completa com manifesto e clipping
- [x] MRD: página completa
- [x] EAD: página completa
- [x] LAB: página completa
- [x] Info: formulário completo com seleção de áreas
- [x] Login: formulário básico
- [x] Clipping: timeline 2019-2023 com cards institucionais

### UX e Interatividade
- [x] Hover apenas por cor/opacidade (sem underline - LOCK MODE)
- [x] Dropdown sem arredondamento (LOCK MODE)
- [x] Responsividade mobile
- [x] Animações suaves
- [x] Estados de loading e erro

---

## 🎯 ITENS CRÍTICOS PARA LANÇAMENTO

### 1. Correções de UX
- [x] Adicionar primeiro item "Início" nos menus das subpáginas (DAD, MRD, EAD, LAB)
- [ ] Testar responsividade mobile do menu dropdown
- [ ] Validar navegação completa entre todas as páginas
- [ ] Verificar todos os links funcionando corretamente

### 2. Multilíngue - Páginas Restantes
- [ ] Adicionar traduções PT/EN/FR na página Clipping
- [ ] Adicionar traduções PT/EN/FR na página Login
- [ ] Testar alternância de idioma em todas as páginas

### 3. Testes de Tema
- [ ] Testar alternância dark/light em todas as páginas
- [ ] Verificar contraste de cores em ambos os temas
- [ ] Validar carregamento de logos corretos por tema
- [ ] Testar persistência de tema após reload

### 4. Validação de Formulários
- [ ] Testar formulário de contato (Info)
- [ ] Testar formulário de login
- [ ] Validar envio de e-mails
- [ ] Verificar mensagens de erro/sucesso

### 5. Performance e Assets
- [ ] Verificar carregamento de todas as imagens
- [ ] Validar paths de logos em produção
- [ ] Otimizar imagens pesadas (se necessário)
- [ ] Testar cache-buster das logos

### 6. SEO e Meta Tags
- [ ] Validar meta tags em todas as páginas
- [ ] Verificar sitemap.xml atualizado
- [ ] Confirmar robots.txt configurado
- [ ] Testar Open Graph tags

---

## 📦 CONTEÚDO FUTURO (Pós-Lançamento)

### Integração de Conteúdo Externo
- [ ] HOME: Herdar conteúdo adicional do manifesto
- [ ] DESIGN: Integrar conteúdo de hlqzbsae e llmouute
- [ ] MUNDO ROÇA: Integrar conteúdo de xxnbfvtc, vnhwxqdn, ddjuumku
- [ ] EAD: Integrar conteúdo de htqbedjv, gjpahwlw, qkmuhxsh
- [ ] LAB: Integrar projetos + parceiros + blog (jdozwvcl)

### Novas Páginas
- [ ] Criar página de Licenciamento (/dad/licenciamento)
- [ ] Conectar CTA "Solicitar consulta" do Manifesto ao formulário
- [ ] Criar seção resumida INFO na Home com botão

### Melhorias Visuais
- [ ] Atualizar ícones Pilares do Projeto (minimalista P&B SVG)
- [ ] Adicionar mais animações de scroll
- [ ] Implementar transições suaves entre temas

---

## 🚀 CHECKLIST PRÉ-LANÇAMENTO

- [ ] ✅ Todos os itens críticos implementados
- [ ] ✅ Testes de UX completos
- [ ] ✅ Multilíngue funcionando em todas as páginas
- [ ] ✅ Temas dark/light validados
- [ ] ✅ Formulários testados
- [ ] ✅ Performance otimizada
- [ ] ✅ SEO configurado
- [ ] ✅ Build de produção gerado
- [ ] ✅ Deploy realizado

---

**Última atualização:** Checkpoint 82905663 - Correções Dark Mode e Multilíngue
