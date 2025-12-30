# Portal v1.0 — Snapshot Pré-Migração

**Data:** 30/12/2025  
**Checkpoint Baseline:** b875e968 (Portal v0.95)  
**Origem:** https://dougportal-v25.manus.space/  
**Destino:** https://www.dougamorim.com

---

## 📦 Inventário de Assets

### Logos (200x85px, frame invisível)
**Dark Mode (logos claros):**
- `/assets/logos/light/daco-light.png`
- `/assets/logos/light/dad-light.png`
- `/assets/logos/light/mrd-light.png`
- `/assets/logos/light/ead-light.png`
- `/assets/logos/light/lab-light.png`

**Light Mode (logos escuros):**
- `/assets/logos/dark/daco-dark.png`
- `/assets/logos/dark/dad-dark.png`
- `/assets/logos/dark/mrd-dark.png`
- `/assets/logos/dark/ead-dark.png`
- `/assets/logos/dark/lab-dark.png`

### Imagens Hero (Carrossel)
- `/assets/hero/HeroSlide01LightMode.png`
- `/assets/hero/HeroSlide02DarkMode.png`
- `/assets/hero/HeroSlide03DAD.png`
- `/assets/hero/HeroSlide04MRD.png`
- `/assets/hero/HeroSlide05EAD.png`
- `/assets/hero/HeroSlide06LAB.png`

### Imagens Divisões
- `/assets/divisoes/dad-workspace.webp`
- `/assets/divisoes/ead-classroom.webp`
- `/assets/divisoes/mrd-permacultura.webp`
- `/assets/divisoes/lab-coworking.webp`

### Arquivos Estáticos
- `/robots.txt`
- `/sitemap.xml`
- `/cookies.html`
- `/privacidade.html`
- `/termos.html`
- `/404.html`

---

## 🗺️ Estrutura de Rotas

### Páginas Principais
- `/` → Home (Doug Amorim Co.)
- `/dad` → Design (Doug Amorim Design)
- `/mrd` → Mundo Roça Digital
- `/ead` → Let's Go Beyond (Aprendizado)
- `/lab` → Laboratório Criativo

### Páginas Secundárias
- `/dad/manifesto` → Manifesto DAD
- `/dad/clipping` → Clipping DAD
- `/dad/licenciamento` → Licenciamento DAD
- `/info` → Informações e Contato
- `/login` → Acesso

### Âncoras Internas
- `/dad#portfolio` → Seção Portfólio (link externo para https://www.dougamorim.com/portfolio)
- `/mrd#permacultura` → Seção Permacultura
- `/mrd#fauna-flora` → Seção Fauna e Flora
- `/mrd#comunidade` → Seção Comunidade
- `/ead#conteudo` → Seção Conteúdo
- `/ead#biblioteca` → Seção Biblioteca
- `/lab#missao` → Seção Missão
- `/lab#sites` → Seção Sites
- `/lab#aplicativos` → Seção Aplicativos

---

## 🏷️ Metadata SEO

### Títulos e Descriptions
**Configurados em:** `client/index.html`

```html
<title>Doug Amorim Co. | Design · Natureza · Aprendizado · Inovação</title>
<meta name="description" content="Portal oficial de Doug Amorim: Design estratégico, Mundo Roça Digital, Aprendizado de Inglês e Laboratório Criativo. 25 anos entregando clareza, presença e estratégia digital." />
```

### Open Graph Tags
```html
<meta property="og:title" content="Doug Amorim Co." />
<meta property="og:description" content="Design estratégico, Mundo Roça Digital, Aprendizado e Inovação" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.dougamorim.com" />
<meta property="og:image" content="https://www.dougamorim.com/assets/og-image.png" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Doug Amorim Co." />
<meta name="twitter:description" content="Design estratégico, Mundo Roça Digital, Aprendizado e Inovação" />
<meta name="twitter:image" content="https://www.dougamorim.com/assets/og-image.png" />
```

---

## ✅ Checklist de Integridade

### Páginas
- [x] Home carrega sem erro
- [x] DAD carrega sem erro
- [x] MRD carrega sem erro
- [x] EAD carrega sem erro
- [x] LAB carrega sem erro
- [x] Info carrega sem erro
- [x] Login carrega sem erro
- [x] Manifesto carrega sem erro
- [x] Clipping carrega sem erro
- [x] Licenciamento carrega sem erro

### Links Internos
- [x] Navegação entre páginas funciona
- [x] Breadcrumbs funcionam
- [x] Menu dropdown funciona
- [x] Âncoras internas funcionam

### Dependências
- [x] TypeScript: sem erros
- [x] Build: sem erros
- [x] Dependencies: OK

### Temas
- [x] Alternância dark/light funciona
- [x] Logos alternam por tema
- [x] Cookie bar legível em ambos os temas
- [x] Persistência no localStorage

### Idioma
- [x] Sistema PT-BR consistente
- [x] Seletor de idioma desativado (evita promessas falsas)

---

## 🎯 Status: Portal v1.0 Baseline

**Checkpoint:** b875e968  
**Estado:** Estável, sem bugs críticos  
**Pronto para migração:** ✅

---

**Próxima Fase:** Validar domínio www.dougamorim.com
