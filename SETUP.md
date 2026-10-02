# SETUP — Guia de instalação

Guia completo pra configurar o APSIDE-OS.

---

## Pré-requisitos

- Git
- opencode

---

## 1. Abrir sessão

```bash
# Abra a pasta no opencode — o BOOT.md carrega o contexto
```

---

## 2. Personalizar

### Identidade visual
Edite `identidade/design-guide.md` com suas cores, fontes e logo.

### Tom de voz
Edite `memoria/preferencias.md` com seu estilo de comunicação.

### Estratégia
Edite `memoria/estrategia.md` com suas prioridades.

### Skills
Crie skills novas seguindo o template em `templates/skills/skill-template.md`.

---

## 3. Versionar

```bash
# Criar repositório no GitHub
gh repo create meu-apside-os --private --source=. --push

# Ou manualmente
git remote add origin https://github.com/usuario/meu-apside-os.git
git push -u origin main
```

---

## Solução de problemas

### Erro de permissão no git
- Verifique se o repositório existe no GitHub
- Verifique as credenciais do git
