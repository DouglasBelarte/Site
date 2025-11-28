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
