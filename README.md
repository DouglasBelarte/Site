# Belarte Co. - Versão Final do Website

## Visão Geral

Este é o site oficial da Belarte Co., uma marca de moda que representa a fusão perfeita entre elegância italiana e alma brasileira. O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web moderno, com foco em responsividade, acessibilidade e internacionalização.

## Características Principais

### ✨ Design e Estilo
- **Tipografia**: Uso correto das fontes Bandar (títulos) e Lato/Cormorant Garamond (corpo)
- **Cores**: Paleta baseada em Rose Quartz (#B76E79) e Antique Gold (#C8A165)
- **Efeitos Hover**: Cards e botões com elevação (translateY(-10px)) e sombras elegantes
- **Layout Responsivo**: Design mobile-first que se adapta a todos os dispositivos

### 🌍 Internacionalização (i18n)
- **Idiomas Suportados**: Inglês (padrão), Português e Italiano
- **Sistema de Tradução**: Arquivos JSON para cada idioma
- **Seletor de Idiomas**: Disponível no header e menu mobile
- **Atributos data-i18n**: Implementados em todos os textos estáticos

### 🎯 Funcionalidades Técnicas
- **Header Dinâmico**: Transparente no topo, sólido ao rolar
- **Navegação Mobile**: Menu hambúrguer com overlay e focus trap
- **Lazy Loading**: Carregamento otimizado de imagens
- **Acessibilidade**: Atributos ARIA e navegação por teclado
- **Anti-Stroke**: Sistema que previne text-stroke nas fontes

### 📱 Responsividade
- **Mobile-First**: Desenvolvido priorizando dispositivos móveis
- **Breakpoints**: Adaptação para tablet (768px+) e desktop (1024px+)
- **Componentes Flexíveis**: Grid e flexbox para layouts adaptativos
- **Imagens Responsivas**: Otimização automática para diferentes tamanhos

## Estrutura do Projeto

```
/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── script.js          # JavaScript principal
├── i18n/
│   ├── en.json            # Traduções em inglês
│   ├── pt.json            # Traduções em português
│   └── it.json            # Traduções em italiano
├── assets/
│   ├── images/            # Imagens do site
│   ├── videos/            # Vídeos (hero)
│   └── fonts/             # Arquivos de fonte
└── README.md              # Documentação
```

## Seções do Site

### 1. Header
- Logo centralizado com borboleta
- Menu hambúrguer (mobile)
- Seletor de idiomas
- Ícones de busca e carrinho

### 2. Hero Section
- Vídeo de fundo com poster de fallback
- Título "Summer 26"
- Botões de call-to-action

### 3. Coleções
- **Eleganza**: Sofisticação italiana para ocasiões especiais
- **Tropicale**: Frescor brasileiro com toque mediterrâneo
- **Artesania**: Bordados e detalhes artesanais do Brasil

### 4. Sobre a Marca
- História da Belarte Co.
- Missão e valores
- Imagem do ateliê

### 5. Newsletter
- Formulário de inscrição
- Botões de contato (WhatsApp/Email)

### 6. Footer
- Endereços
- Links rápidos
- Redes sociais

## Correções Implementadas

### ✅ Fontes
- Implementação correta da fonte Bandar sem text-stroke
- Carregamento otimizado com preload
- Fallbacks apropriados

### ✅ Header
- Ordem correta: Menu → Logo → Idiomas/Busca/Carrinho
- Comportamento sticky dinâmico
- Navegação mobile acessível

### ✅ Promo Bar
- Altura exata de 20px
- Cor Rose Quartz (#B76E79)
- Texto centralizado

### ✅ Efeitos Hover
- Elevação de -10px em cards e botões
- Sombras detalhadas (rgba(0,0,0,0.15) 0 20px 40px)
- Transições suaves (0.4s)

### ✅ Responsividade
- Breakpoints bem definidos
- Componentes adaptativos
- Navegação mobile otimizada

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript ES6+**: Funcionalidades interativas
- **JSON**: Sistema de traduções
- **Git**: Controle de versão

## Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet, mobile
- **Acessibilidade**: WCAG 2.1 AA

## Deploy

O site está configurado para deploy estático e pode ser hospedado em qualquer servidor web. Os arquivos estão otimizados para produção com:

- CSS minificado
- Imagens otimizadas
- Lazy loading implementado
- Cache headers apropriados

## Manutenção

### Adicionar Novos Idiomas
1. Criar arquivo JSON em `/i18n/[codigo].json`
2. Adicionar opção no seletor de idiomas
3. Atualizar JavaScript para carregar o novo idioma

### Atualizar Conteúdo
1. Modificar arquivos JSON para textos
2. Substituir imagens em `/assets/images/`
3. Atualizar CSS para mudanças visuais

### Performance
- Monitorar Core Web Vitals
- Otimizar imagens regularmente
- Verificar carregamento de fontes

## Contato

Para suporte técnico ou dúvidas sobre implementação, consulte a documentação do código ou entre em contato com a equipe de desenvolvimento.

---

**Belarte Co.** - Italian Design, Brazilian Soul ✨
