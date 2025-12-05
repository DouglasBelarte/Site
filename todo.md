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
