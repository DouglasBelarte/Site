# Portal Doug Preview - TODO

- [x] Implementar página principal (index) com hero e seções
- [x] Implementar seção de áreas (DAD, MRD, EAD, LAB)
- [x] Implementar seção sobre Doug
- [x] Implementar formulário de contato com backend
- [x] Criar endpoint de envio de e-mail
- [x] Implementar páginas legais (termos, privacidade, cookies)
- [x] Implementar página 404
- [x] Implementar banner de cookies
- [x] Implementar menu mobile responsivo
- [x] Aplicar tipografia (Playfair Display + Inter)
- [x] Aplicar paleta de cores DA.co (cinza neutro + laranja #E85D04)
- [x] Configurar meta tags e SEO

## Correções

- [x] Corrigir fundo transparente do header fixo (deve ter cor sólida)

## Novas Funcionalidades

- [x] Adicionar botão 'Voltar ao Topo' no canto inferior direito

## Atualização v1.1.1 - Logos Oficiais (LOCK MODE)

- [x] Copiar logos para /public/assets/logos/
- [x] Adicionar CSS .brand-logo (160px desktop, 140px mobile)
- [x] Criar componente GlobalHeader com suporte a logos por seção
- [x] Criar página DAD com logo e menu específico
- [x] Criar página MRD com logo e menu específico
- [x] Criar página EAD com logo e menu específico
- [x] Criar página LAB com logo, fundo preto e menu específico
- [x] Adicionar rotas no App.tsx para todas as páginas
- [x] Aplicar data-section em cada página para cores contextuais

## Update Corretivo + Multilíngue (LOCK MODE)

- [x] Corrigir logos das subpáginas (DAD, MRD, EAD, LAB)
- [x] Adicionar formulário de contato na seção Contato (já existia)
- [x] Configurar envio de e-mail para info@dougamorim.com (já configurado)
- [x] Integrar botão WhatsApp (+55 11 97581-3741)
- [x] Ativar sistema multilíngue (PT/EN/IT)
- [x] Testar carregamento de logos em todas as páginas
- [x] Testar envio do formulário
- [x] Testar botão WhatsApp
- [x] Testar troca de idioma

## LOCKDOWN MODE - Ajustes Técnicos Precisos

- [x] Ajustar todas as logos para 200x85px com object-fit:contain
- [x] Copiar logo LAB atualizada (MANUALMARCADAcoCOM.png)
- [x] Implementar sistema de tradução automática EN/PT/FR
- [x] Corrigir responsividade do header mobile
- [x] Adicionar breadcrumb global em todas as páginas
- [x] Gerar pacote para deploy no Netlify

## Correção Técnica - Logos, Multilíngue, Responsividade

- [x] Verificar presença de todos os arquivos de logo no servidor
- [x] Corrigir caminhos (src) das logos no HTML/CSS/JS
- [x] Verificar permissões de leitura das logos (chmod 644)
- [x] Garantir que logos não estejam invisíveis por CSS
- [x] Verificar formatos das logos existentes (JPG e PNG, formatos compatíveis)
- [x] Converter logos para PNG se necessário (não necessário, formatos OK)
- [x] Implementar cache-buster para logos (query string com versão v1.1.1)
- [x] Ativar tradução automática funcional EN/PT/FR
- [x] Garantir que botões de idioma troquem conteúdo real
- [x] Corrigir responsividade do header mobile (media-query, flexbox)
- [x] Testar em Chrome/Edge com cache limpo

## Correção de Erro HTML

- [x] Corrigir tags <a> aninhadas no componente Breadcrumb

## Atualização de Conteúdo - Menu + Integração (LOCK MODE)

### 1. Atualização do Menu Header
- [x] Substituir "Manifesto" por "HOME"
- [x] Renomear "DAD" para "DESIGN"
- [x] Manter "MUNDO ROÇA" (Roça)
- [x] Substituir "Let's Go Beyond" por "EAD"
- [x] Substituir "Projetos" por "LAB"
- [x] Remover "Parceiros" do menu principal (migrar para LAB)

### 2. Correção de URLs
- [x] Substituir todas ocorrências de https://www.dougamorim.com/?lang=en por https://www.dougamorim.com/portfolio (URL não encontrada no código atual)

### 3. Integração de Conteúdo
- [ ] HOME: Herdar conteúdo do manifesto/página principal
- [ ] DESIGN: Integrar conteúdo de hlqzbsae.manus.space e llmouute.manussite.space
- [ ] MUNDO ROÇA: Integrar conteúdo de xxnbfvtc, vnhwxqdn, ddjuumku
- [ ] EAD: Integrar conteúdo de htqbedjv, gjpahwlw, qkmuhxsh
- [ ] LAB: Integrar projetos + parceiros + blog (jdozwvcl.manus.space)

### 4. Breadcrumbs
- [ ] Aplicar breadcrumbs em todas as páginas filhas seguindo nova estrutura

### 5. QA
- [ ] Conferir todos os links
- [ ] Verificar ordem e rótulos do menu
- [ ] Testar responsividade
- [ ] Validar CTAs e formulários

### Correção Adicional
- [x] Remover "Blog" do menu principal da Home
- [x] Integrar "Blog" dentro da seção LAB

### Correção Breadcrumb
- [x] Fixar breadcrumbs junto ao header nas subpáginas (sticky)

### Correção Nomenclatura Breadcrumb
- [x] Alterar "Home" para "HOME" no breadcrumb

## QA - Imagens e Multilíngue
- [x] Verificar carregamento de logos em todas as páginas (OK - logos carregando)
- [x] Verificar cache-buster das imagens (OK - v1.1.1 aplicado)
- [x] Testar sistema multilíngue na Home (OK - funcionando)
- [x] Testar sistema multilíngue em DAD/DESIGN (PROBLEMA - não traduz)
- [x] Aplicar traduções em MRD/MUNDO ROÇA
- [x] Aplicar traduções em EAD
- [x] Aplicar traduções em LAB
- [x] Testar persistência de idioma entre páginas (OK - idioma EN persistindo)
- [x] Testar QA completo em navegador (OK - logos e traduções funcionando)

## Manifesto D.A.D.

- [x] Criar página Manifesto D.A.D. com conteúdo completo
- [x] Implementar layout minimalista editorial premium
- [x] Adicionar animações fade-in no scroll
- [x] Criar rota /dad/manifesto
- [x] Adicionar link de navegação no menu DAD
- [x] Testar responsividade e validar

## Melhorias Home + Manifesto + Licenciamento

- [x] Linkar cards das frentes (DAD, MRD, EAD, LAB) às subpáginas
- [x] Mudar CTAs de "QUERO ORÇAR" para "Venha conhecer"
- [x] Adicionar traduções EN/FR ao Manifesto D.A.D.
- [ ] Criar página de Licenciamento (/dad/licenciamento)
- [ ] Conectar CTA "Solicitar consulta" do Manifesto ao formulário de contato

## Deploy Netlify

- [x] Gerar build de produção
- [x] Criar pacote ZIP para Netlify
- [x] Gerar instruções de deploy

## SEO - Sitemap e Robots

- [x] Criar sitemap.xml com todas as páginas
- [x] Criar robots.txt configurado
- [x] Gerar novo build e pacote Netlify

## LOCK MODE - Correções Técnicas

- [x] Aplicar background #373435 no header e breadcrumb da página LAB
- [x] Manter background #FFFFFF no header e breadcrumb das demais páginas
- [x] Transformar todos os links dos menus para ALL CAPS (text-transform: uppercase)
- [x] Adicionar underline no hover dos links usando cor da paleta de cada página
- [x] Corrigir paths das logos para produção (garantir carregamento em todos os navegadores)

## LOCK MODE - Correção Linhas Brancas LAB e Header Home

- [x] Remover linhas brancas entre header, breadcrumb e base na página LAB
- [x] Ajustar bordas da página LAB para cor #373435
- [x] Verificar header e breadcrumb da página Home usam fundo branco padrão
- [x] Garantir hover dos links do menu na Home seguem cor laranja #E85D04 da paleta DA.co

## LOCK MODE - Padronização Linhas e Remoção Sticky

- [x] Remover sticky do header (header fica no topo da página, não acompanha scroll)
- [x] Remover sticky do breadcrumb (breadcrumb fica abaixo do header, não acompanha scroll)
- [x] Padronizar linhas entre header e breadcrumb para brancas em todas as páginas
- [x] Manter linha #373435 apenas na sub página LAB

## Botão Voltar ao Topo Flutuante

- [x] Verificar componente ScrollToTop existente
- [x] Garantir que botão apareça após scroll (300px ou mais)
- [x] Estilizar botão flutuante no canto inferior direito
- [x] Adicionar animação suave de aparecimento/desaparecimento
- [x] Testar funcionalidade em todas as páginas

## Substituição de Logomarcas JPG → PNG

- [x] Copiar DAcoLogoinwhite.png para /public/assets/logos/ (página principal)
- [x] Copiar DAcoLogoDADinwhite.png para /public/assets/logos/ (Doug Design)
- [x] Copiar DAcoLogoMRDinwhite.png para /public/assets/logos/ (Mundo Roça)
- [x] Copiar DAcoLogoEADinwhite.png para /public/assets/logos/ (EAD)
- [x] Atualizar referências no GlobalHeader.tsx (.jpg → .png)
- [x] Remover arquivos .JPG antigos do diretório
- [x] Incrementar cache-buster para v1.1.2

## Atualização de Cor EAD: Roxo → Púrpura

- [x] Converter CMYK 40 100 0 0 para HEX (#990099)
- [x] Atualizar cor de hover no index.css (#8B5CF6 → #990099)
- [x] Atualizar todas as referências de cor na página EAD.tsx
- [x] Verificar consistência visual em todos os elementos EAD

## LOCK MODE - Correção Global dos Paths das Logos

- [x] Verificar arquivos PNG existentes em /public/assets/logos/
- [x] Verificar correspondência exata de nomes (case-sensitive) no código
- [x] Corrigir paths no GlobalHeader.tsx se necessário
- [x] Eliminar qualquer referência restante a .jpg
- [x] Garantir paths absolutos corretos (/assets/logos/<nome>.png)

## Atualização Logo LAB e Dimensão Fixa Header

- [x] Copiar DAcoLogoLABinwhite.png para /public/assets/logos/
- [x] Atualizar referência da logo LAB no GlobalHeader.tsx
- [x] Remover LAB-logo.png antigo
- [x] Adicionar dimensão fixa width: 100px para todas as logos no header
- [x] Incrementar cache-buster para v1.1.3

## Substituição Logo EAD e Atualização Cor Very Peri

- [x] Copiar nova DAcoLogoEADinwhite.png para /public/assets/logos/
- [x] Converter CMYK 66 60 0 0 para HEX (#5766CC)
- [x] Atualizar cor de hover no index.css (#990099 → #5766CC)
- [x] Atualizar todas as referências de cor na página EAD.tsx
- [x] Incrementar cache-buster para v1.1.4

## Atualização Completa Header e Logos

### Substituição de Logos
- [x] Copiar DAcoLogoinwhite.png (DA.co)
- [x] Copiar DAcoLogoDADinwhite.png (DAD)
- [x] Copiar DAcoLogoMRDinwhite.png (MRD)
- [x] Copiar DAcoLogoEADinwhite.png (EAD)
- [x] Copiar DAcoLogoLABinwhite.png (LAB)

### Atualização Cor DAD
- [x] Converter CMYK 60 90 0 10 para HEX (#79458E)
- [x] Atualizar cor hover DAD no index.css
- [x] Atualizar cor na página DAD.tsx

### Reestruturação Header
- [x] Adicionar títulos acima dos menus (Doug Amorim Co., Doug Amorim Design, etc.)
- [x] Alinhar menus principais à esquerda
- [x] Converter texto dos menus para minúsculas
- [x] Incrementar cache-buster para v1.2.0

## Margem Topo Página Principal

- [x] Adicionar margem de 20px no topo da página Home (consistência com subpáginas)

## Fonte Playfair Display nos Títulos Header

- [x] Aplicar Playfair Display + uppercase nos títulos do header
- [x] Ajustar dimensão da logo na Home para 200x85px
- [x] Manter dimensão 100px nas subpáginas

## Expansão Home para Landing Page Completa

### Extração de Conteúdo
- [x] Acessar https://jdozwvcl.manus.space/ e extrair todo o conteúdo
- [x] Documentar seções, textos, imagens, CTAs e blocos visuais

### Integração na Home
- [x] Expandir Home mantendo conteúdo atual intacto
- [x] Adicionar seções: Sobre Doug Amorim expandido, Pilares do Projeto, Resultados Comprovados, Proposta de Valor, CTA Transformação
- [x] Usar apenas componentes e estilos existentes no template
- [x] Manter header, menu e footer sem alterações (LOCKDOWN)
- [x] Garantir responsividade mobile preservada

## Integração Seção NOSSAS DIVISÕES (ooexijku.manus.space)

### Extração de Conteúdo
- [x] Acessar https://ooexijku.manus.space/ e extrair seção NOSSAS DIVISÕES
- [x] Documentar textos, imagens e estrutura visual
- [x] Baixar todas as imagens da seção para /public/assets/divisoes/

### Integração na Home
- [x] Fundir seção NOSSAS FRENTES com conteúdo NOSSAS DIVISÕES
- [x] Usar textos originais da seção ooexijku.manus.space
- [x] Integrar imagens reais (DAD workspace, EAD classroom, MRD permacultura, LAB coworking)
- [x] Manter header, menu e footer sem alterações (LOCKDOWN)
- [x] Garantir responsividade mobile preservada

## Home v3.0 - Atualização Completa (Prompt Cirúrgico)

### Carrossel Hero (6 Slides)
- [x] Copiar 6 imagens para /public/assets/hero/
- [x] Implementar carrossel automático com fade transition
- [x] Configurar auto-play 4-5 segundos
- [x] Adicionar pontos discretos para navegação manual
- [x] Vincular slides 3-6 às subpáginas (/dad, /mrd, /ead, /lab)

### Menu Secundário
- [x] Atualizar para: `light/dark mode . info . pt . acesso`
- [x] Adicionar ícone visual light/dark (sem funcionalidade ainda)
- [x] Garantir minúsculas e espaçamento " . " exato

### Paleta de Cores Oficial
- [x] Aplicar Cinza Escuro (RGB 114/115/118) para títulos e textos
- [x] Aplicar Laranja (RGB 245/135/79) para hover e detalhes
- [x] Atualizar cores de botões conforme paleta por subseção
- [x] Garantir hover laranja #F5874F em todos os botões

### Efeito Parallax
- [x] Adicionar parallax suave nos cards com imagens (Nossas Frentes)
- [x] Usar apenas CSS permitido pelo template lockdown
- [x] Manter proporção das imagens sem distorção

### Reorganização Estrutural
- [x] Adicionar frase hero: "25 anos entregando clareza, presença e estratégia digital."
- [x] Reorganizar bloco "Sobre Doug Amorim" (Quem sou eu + Números + Manifesto)
- [x] Adicionar título: "O ecossistema DA.co — quatro frentes, uma só visão."
- [x] Destacar Case "Anjos do Peito" com card especial
- [x] Mover "Quem está por trás" após "DA.co em 4 linhas"
- [x] Atualizar CTA final: "Vamos iniciar? Me diga o que você precisa."
- [x] Aumentar espaçamentos entre seções

## Correção Carrossel Hero e Paleta de Cores Global

### Carrossel Hero - Responsividade
- [x] Corrigir largura do carrossel para 100% da tela (full-width)
- [x] Garantir que imagens se ajustem responsivamente às dimensões da tela
- [x] Testar em diferentes resoluções (mobile, tablet, desktop)

### Paleta de Cores Oficial - Aplicação Global
- [x] Atualizar variáveis CSS no index.css com valores RGB corretos
- [x] Aplicar Cinza Escuro (RGB 114/115/118) em todos os textos, títulos, menus e linhas
- [x] Aplicar Laranja (RGB 245/135/79) em detalhes, hover e sombras de botões
- [x] Aplicar cores específicas por página:
  - [x] HOME (DA.co): Cinza Escuro + Laranja
  - [x] DESIGN (DAD): Azul (RGB 44/110/181) + Laranja
  - [x] MUNDO ROÇA (MRD): Verde (RGB 0/168/89) + Laranja
  - [x] ESTUDO (EAD): Roxo (RGB 121/69/142) + Laranja
  - [x] LAB: Preto (RGB 0/0/0) + Amarelo (RGB 255/100/0)
- [x] Testar hover em todos os botões e links
- [x] Verificar contraste de cores para acessibilidade

## Implementação Prompt Final - Correções e Funcionalidades

### 1. Breadcrumbs - Correções Globais
- [x] Atualizar breadcrumb Home para "Home Doug Co"
- [x] Atualizar breadcrumb Design (DAD) para "Design"
- [x] Atualizar breadcrumb Mundo Roça (MRD) para "Mundo Roça"
- [x] Atualizar breadcrumb EAD para "Learning and Teaching"
- [x] Atualizar breadcrumb LAB para "Laboratório Criativo"
- [x] Criar breadcrumb INFO para "Informações e Contato"

### 2. Header - Menu Secundário e Funcionalidades
- [x] Corrigir menu secundário: modo claro/escuro, pt/en/fr, acesso, info
- [x] Reativar sistema multilíngue PT/EN/FR completo
- [ ] Implementar modo claro/escuro funcional
- [ ] Aplicar logomarcas correspondentes (light e dark) por modo
- [x] Criar página /login com formulário básico

### 3. Paleta de Cores - Correções por Subpágina
- [x] LAB: substituir elementos laranja por amarelo (RGB 255/100/0)
- [x] Verificar todas as páginas mantêm paletas oficiais

### 4. Carrossel Home - Funcionalidades
- [x] Implementar transição animada entre imagens
- [x] Adicionar hover com zoom suave nas imagens
- [x] Implementar cliques: DAD→/dad, MRD→/mrd, EAD→/ead, LAB→/lab
- [ ] Slides Light/Dark Mode alternam tema do site

### 5. LAB - Versão Light Mode
- [ ] Criar clone da página LAB para modo claro
- [ ] Aplicar logomarca modo claro
- [ ] Aplicar paleta light (fundo branco, textos escuros)
- [ ] Manter mesma estrutura e conteúdo
- [ ] Conferir caminhos dos arquivos

### 6. Menu Dropdown Inteligente (Home)
- [ ] Implementar dropdown no hover sobre Design, Mundo Roça, EAD, LAB
- [ ] Header estende background ao abrir dropdown
- [ ] Funcionar em modo light e dark

### 7. Página Clipping (DAD)
- [ ] Criar página /dad/clipping
- [ ] Seguir layout de https://yuzjlnbg.manus.space/
- [ ] Implementar Hero
- [ ] Criar timeline 2019-2023
- [ ] Adicionar cards institucionais
- [ ] Incluir logos de veículos parceiros

### 8. Página INFO - Criação Completa
- [x] Criar página /info/ completa
- [x] Implementar versão light + dark
- [x] Adicionar suporte trilíngue (PT/EN/FR)
- [x] Usar paleta padrão da Home
- [x] Criar breadcrumb "Informações e Contato"
- [x] Implementar Hero simples com título e subtítulo
- [x] Criar formulário com seleção de áreas (DAD, MRD, EAD, LAB, Geral)
- [x] Configurar envio para info@dougamorim.com
- [x] Adicionar botão WhatsApp (+55 11 97581-3741)
- [x] Incluir placeholder para localização e links institucionais
- [ ] Criar seção resumida na Home com botão "INFO / Contato"

### 9. Ícones Pilares do Projeto (Home)
- [ ] Atualizar todos os ícones para estilo minimalista clean
- [ ] Aplicar preto e branco (monocromia refinada)
- [ ] Usar formato vetorizado (SVG preferencial)
- [ ] Garantir consistência (mesma espessura, bordas, proporção)
- [ ] Gravar conhecimento no template para futuros ícones

### 10. Finalização e Testes
- [ ] Revisar responsividade em todas as páginas
- [ ] Validar navegação completa
- [ ] Checar breadcrumbs em todas as páginas
- [ ] Testar alternância dark/light mode
- [ ] Verificar caminhos de todas as imagens
- [ ] Testar formulários (login, info)
- [ ] Validar links do carrossel
- [ ] Testar menu dropdown

## Correção Urgente - Cor Amarela LAB
- [x] Corrigir cor amarela de RGB 255/100/0 para RGB 255/204/41 no index.css
- [x] Atualizar todos os elementos amarelos na página LAB para RGB 255/204/41
- [x] Verificar e atualizar qualquer referência à cor amarela incorreta

## Próximos Passos - Funcionalidades Avançadas

### Modo Claro/Escuro Funcional
- [x] Habilitar switchable no ThemeProvider
- [x] Conectar botão do menu secundário ao useTheme hook
- [ ] Atualizar logomarcas conforme tema (light/dark)
- [x] Testar alternância em todas as páginas
- [x] Verificar persistência do tema escolhido

### Menu Dropdown Inteligente (Home)
- [x] Criar componente DropdownNav para submenus
- [x] Adicionar submenus para Design, Mundo Roça, EAD, LAB
- [x] Implementar hover para abrir dropdown
- [x] Estender background do header ao abrir
- [x] Garantir funcionamento em light/dark mode
- [ ] Testar responsividade mobile

### Página Clipping (DAD)
- [x] Criar arquivo /dad/clipping.tsx
- [x] Implementar Hero section
- [x] Criar timeline 2019-2023 com eventos
- [x] Adicionar cards institucionais
- [x] Incluir logos de veículos parceiros
- [x] Seguir layout de https://yuzjlnbg.manus.space/
- [x] Adicionar rota no App.tsx
- [x] Testar navegação e responsividade
