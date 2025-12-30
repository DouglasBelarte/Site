# Portal Doug Amorim — v0.95

**Status:** 🧊 FROZEN (Pronto para publicação)  
**Checkpoint:** b875e968  
**Branch:** portal-v095  
**Repositório:** https://github.com/DouglasBelarte/Site

---

## 📋 Sobre o Projeto

Portal corporativo oficial de Doug Amorim integrando quatro frentes de atuação:

- **DA.co** (Home) — Doug Amorim Company
- **DAD** — Doug Amorim Design (Branding & Identidade Visual)
- **MRD** — Mundo Roça Digital (Tecnologia para sitiantes)
- **EAD** — Let's Go Beyond (Aprendizado de Inglês)
- **LAB** — Laboratório Criativo (Parcerias Estratégicas & IA)

---

## 🚀 Stack Tecnológica

- **Frontend:** React 19 + TypeScript + Tailwind CSS 4
- **Backend:** Express 4 + tRPC 11
- **Database:** MySQL/TiDB (via Drizzle ORM)
- **Auth:** Manus OAuth
- **Build:** Vite 6
- **Deploy:** Manus Platform

---

## 📦 Estrutura do Projeto

```
portal_doug_preview/
├── client/                 # Frontend React
│   ├── public/            # Assets estáticos
│   │   ├── assets/
│   │   │   ├── logos/     # Logos dark/light (200x85px)
│   │   │   ├── hero/      # Carrossel (6 slides)
│   │   │   └── divisoes/  # Imagens das seções
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── *.html         # Páginas estáticas
│   └── src/
│       ├── pages/         # 10 páginas principais
│       ├── components/    # Componentes reutilizáveis
│       ├── contexts/      # Theme & Language contexts
│       └── lib/           # tRPC client
├── server/                # Backend Express + tRPC
├── drizzle/              # Database schema
└── docs/                 # Documentação
    ├── TASK_FREEZE.md
    └── MIGRATION_V1.0_SNAPSHOT.md
```

---

## ✨ Funcionalidades Implementadas

### Core
- ✅ 10 páginas completas e responsivas
- ✅ Sistema de roteamento com breadcrumbs
- ✅ Header global com logos por seção
- ✅ Footer com links institucionais
- ✅ Cookie bar e scroll to top

### Temas
- ✅ Dark/Light mode com detecção automática
- ✅ Logos alternando por tema (200x85px)
- ✅ Paleta de cores oficial:
  - HOME: Cinza Escuro + Laranja
  - DAD: Azul + Laranja
  - MRD: Verde + Laranja
  - EAD: Roxo + Laranja
  - LAB: Preto + Amarelo
- ✅ Persistência no localStorage

### UX
- ✅ Carrossel hero (6 slides, auto-play 5s, hover zoom)
- ✅ Menu dropdown inteligente (hover)
- ✅ Efeito parallax nos cards
- ✅ Animações suaves de transição
- ✅ Formulários de contato funcionais

### SEO
- ✅ Meta tags completas (title, description)
- ✅ Open Graph tags
- ✅ Twitter Card
- ✅ Sitemap.xml
- ✅ Robots.txt

---

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
pnpm install

# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Migrations
pnpm db:push

# Testes
pnpm test
```

---

## 📚 Documentação

- **[TASK_FREEZE.md](./TASK_FREEZE.md)** — Instruções de congelamento e estado final
- **[MIGRATION_V1.0_SNAPSHOT.md](./MIGRATION_V1.0_SNAPSHOT.md)** — Inventário completo (assets, rotas, SEO)
- **[DIAGNOSTIC_REPORT_FINAL.md](./DIAGNOSTIC_REPORT_FINAL.md)** — Análise diagnóstica do portal publicado
- **[todo.md](./todo.md)** — Checklist completo de implementações

---

## 🎯 Próximos Passos

**Para publicar em www.dougamorim.com:**

1. Acessar Management UI da Manus
2. Clicar no botão "Publish"
3. Configurar domínio customizado em Settings → Domains
4. Apontar DNS de www.dougamorim.com
5. Validar portal publicado
6. Monitorar por 48h

---

## 📊 Estatísticas

**Páginas:** 10  
**Assets:** 35+ arquivos  
**Checkpoints:** 15+  
**Idioma:** PT-BR (consistente)  
**Temas:** Dark + Light (funcionais)  
**TypeScript:** 0 erros  
**Build:** OK  
**Status:** ✅ Pronto para produção

---

## 🔒 Licença

© 2025 Doug Amorim. Todos os direitos reservados.

---

## 📞 Contato

**Website:** https://www.dougamorim.com  
**Email:** info@dougamorim.com  
**WhatsApp:** +55 11 97581-3741

---

**Portal Doug Amorim — v0.95**  
**Casa limpa, arrumada e fechada.**  
🧊 **FROZEN** 🧊
