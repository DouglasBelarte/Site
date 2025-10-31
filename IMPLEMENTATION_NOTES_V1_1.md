# Notas de Implementação - Manual Técnico v1.1

## Resumo das Mudanças

### Cores por Seção
- **DA.co**: #E85D04 (laranja) - página principal
- **DAD**: #1D4ED8 (azul) - Doug Amorim Design
- **MRD**: #4CAF50 (verde) - Mundo Roça Digital  
- **EAD**: #8B5CF6 (roxo vinho claro) - Let's Go Beyond
- **LAB**: #FACC15 (amarelo) - Pesquisa & Protótipo

### Estrutura do Header Global
1. **Esquerda**: Logotipo da seção atual
2. **Centro**: Menu interno da seção
3. **Direita** (fixo em todas): INFO (Contato) · Seletor de idioma (PT/EN/FR) · Acesso (Login)

### Menus por Seção
- **DA.co**: Manifesto · DAD · Roça · EAD · LAB · Blog
- **DAD**: Home · Portfólio · Clipping
- **MRD**: Permacultura · Fauna e Flora · Comunidade
- **EAD**: Home · Conteúdo · Biblioteca
- **LAB**: Missão · Sites · Aplicativos · Parceiros

### Dimensões
- Header desktop: 72px altura
- Header mobile: 60px altura

### Tipografia
- Títulos/logos/headings: Playfair Display Medium (500)
- Texto corrido/navegação/CTA/formulário: Inter (400-600)

### Sistema de Cores Contextuais
Usar atributo `data-section` no body:
- `<body data-section="daco">` - página principal
- `<body data-section="dad">` - Doug Amorim Design
- `<body data-section="mrd">` - Mundo Roça Digital
- `<body data-section="ead">` - Let's Go Beyond
- `<body data-section="lab">` - Pesquisa & Protótipo

### CSS Contextual
```css
[data-section="dad"] .nav-link:hover { color: #1D4ED8; }
[data-section="mrd"] .nav-link:hover { color: #4CAF50; }
[data-section="ead"] .nav-link:hover { color: #8B5CF6; }
[data-section="lab"] .nav-link:hover { color: #FACC15; }
```

### Footer
Mantém estrutura v0.9b com 4 colunas:
- Institucional (DA.co, tagline, localização)
- Mapa (links para todas as seções)
- Contato (email, WhatsApp, Daniel beta)
- Legal (Termos, Privacidade, Cookies, idiomas)

### Cookies
Banner mantém fundo #2B2B2B, botão pode herdar cor de acento da seção atual.
