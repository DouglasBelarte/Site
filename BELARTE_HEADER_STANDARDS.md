# ⚜️ HEADER PADRÃO BELARTE - Especificação Oficial

## Estrutura Obrigatória do Header

### 1. Comportamento Dinâmico
- **Sempre sticky** (fixo no topo da página)
- **Transparente** quando no topo da página
- **Fundo sólido branco** ao rolar (scroll)
- **Transição suave** de 0.3s para mudança de transparência
- **Altura fixa**: 70px

### 2. Ordem dos Elementos (Esquerda → Centro → Direita)

#### **Esquerda:**
- Ícone de menu hamburger
- Abre navegação lateral em telas pequenas
- Cor: #2B2B2B

#### **Centro:**
- Logotipo Belarte
- Texto "Belarte" em **fonte Bandar sólida**
- **CRÍTICO**: SEM stroke ou outline
- Ícone da Borboleta ao lado
- Alinhamento central perfeito

#### **Direita:**
- Seletor de idiomas (EN/IT/PT)
- Ícone de busca (lupa)
- Ícone de carrinho com badge numérica
- Badge do carrinho: fundo Antique Gold (#C8A165)

### 3. Especificações Técnicas

#### **CSS Classes:**
```css
.belarte-header-dynamic {
    position: fixed;
    top: 40px;
    height: 70px;
    transition: 0.3s;
}

.belarte-header-dynamic.transparent {
    background-color: transparent;
    box-shadow: none;
}

.belarte-header-dynamic.solid {
    background-color: #ffffff;
    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}
```

#### **Logo Bandar:**
```css
.belarte-header-logo .brand {
    font-family: 'Bandar', serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: #2B2B2B;
    letter-spacing: 2px;
    -webkit-text-stroke: 0 !important;
    text-stroke: 0 !important;
    text-shadow: none !important;
}
```

### 4. Responsividade Mobile (<480px)

#### **Side Navigation:**
- Menu hamburger abre **side navigation** lateral
- Largura: 320px (máx 85% da tela)
- Contém:
  - Links de navegação principais
  - Opção de login
  - Seletor de idiomas
  - Botão de fechar

#### **Estrutura do Side Nav:**
```html
<div class="side-nav">
    <button class="close-btn">×</button>
    <nav>
        <a href="#collections">Coleções</a>
        <a href="#about">Sobre</a>
        <a href="#atelier">Ateliê</a>
        <a href="#contact">Contato</a>
    </nav>
    <div class="side-footer">
        <div class="lang-options">EN | IT | PT</div>
        <a href="#login">Login</a>
    </div>
</div>
```

### 5. Cores Oficiais

- **Texto principal**: #2B2B2B
- **Fundo sólido**: #ffffff
- **Badge carrinho**: #C8A165 (Antique Gold)
- **Sombra header**: rgba(0,0,0,0.06)
- **Transparente**: transparent

### 6. Estados de Interação

#### **Scroll Behavior:**
```javascript
// Detectar scroll e aplicar classes
if (scrollY > 100) {
    header.classList.remove('transparent');
    header.classList.add('solid');
} else {
    header.classList.remove('solid');
    header.classList.add('transparent');
}
```

#### **Mobile Menu:**
```javascript
// Abrir/fechar side navigation
hamburger.addEventListener('click', () => {
    sideNav.classList.toggle('open');
});
```

### 7. Acessibilidade

- **Focus visível**: outline de 3px em rgba(200,161,101,0.15)
- **ARIA labels**: todos os botões têm aria-label
- **Navegação por teclado**: suporte completo
- **Focus trap**: no side navigation mobile

### 8. Checklist de Implementação

- [ ] Header sticky funcionando
- [ ] Transição transparente → sólido no scroll
- [ ] Logo "Belarte" em Bandar sólida (sem stroke)
- [ ] Ícone borboleta posicionado corretamente
- [ ] Seletor de idiomas funcional
- [ ] Badge do carrinho com cor correta
- [ ] Side navigation mobile responsiva
- [ ] Acessibilidade implementada
- [ ] Transições suaves (0.3s)
- [ ] Altura 70px mantida

### 9. Referência Visual

**Site de referência**: https://belarten-3qjql8.manus.space/

Este header é o **padrão oficial da marca Belarte** e deve ser mantido consistente em todas as versões do site.

---

**Versão**: 1.0  
**Data**: 27/09/2024  
**Status**: Padrão Oficial Aprovado
