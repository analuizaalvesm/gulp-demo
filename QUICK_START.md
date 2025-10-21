# ⚡ Quick Start - Gulp.js Demo

## 🚀 Início Rápido em 3 Passos

### 1️⃣ Instalar Dependências

```bash
npm install
```

⏱️ Tempo: ~2-3 minutos

### 2️⃣ Executar Build

```bash
npm run build
```

⏱️ Tempo: ~5-10 segundos

### 3️⃣ Iniciar Servidor

```bash
npm start
```

🌐 Abrir: http://localhost:3000

---

## 📋 Comandos Essenciais

```bash
# Build completo
npm run build

# Modo desenvolvimento (watch + servidor)
npm start

# Limpar pasta dist
npm run clean
```

---

## 🎯 Para a Apresentação

### Sequência Recomendada:

1. **Mostrar estrutura**

   ```bash
   ls -la src/
   ```

2. **Executar build**

   ```bash
   npm run build
   ```

3. **Comparar tamanhos**

   ```bash
   ls -lh src/js/
   ls -lh dist/js/
   ```

4. **Iniciar servidor**

   ```bash
   npm start
   ```

5. **Editar SCSS e ver live reload**

   - Editar: `src/scss/styles.scss`
   - Mudar: `$primary-color: #e74c3c;`
   - Salvar e observar reload

6. **Testar no navegador**
   - Clicar em "Testar JavaScript"
   - Abrir DevTools (F12)
   - Ver Network tab

---

## 🐛 Solução de Problemas

### Erro: "npm command not found"

**Solução:** Instale o Node.js

- Windows: https://nodejs.org/
- Verificar: `node --version`

### Erro: "Port 3000 already in use"

**Solução:** Matar processo na porta 3000

```bash
# Windows
npx kill-port 3000

# Ou mudar porta no gulpfile.js (linha ~90)
port: 3001
```

### Erro: "Cannot find module 'gulp'"

**Solução:** Reinstalar dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build muito lento

**Solução:** Verificar antivírus

- Adicionar pasta `node_modules` à exclusão
- Adicionar pasta do projeto à exclusão

---

## 📊 Resultados Esperados

### Tamanhos dos Arquivos:

**Antes (src/):**

- HTML: ~2.5 KB
- CSS (SCSS): ~15 KB
- JS (3 arquivos): ~20 KB
- **Total: ~37.5 KB**

**Depois (dist/):**

- HTML: ~1.8 KB (-28%)
- CSS: ~8 KB (-46%)
- JS: ~12 KB (-40%)
- **Total: ~21.8 KB (-42%)**

### Performance:

- ⚡ Build time: **5-10 segundos**
- 🔄 Live reload: **< 1 segundo**
- 📦 Redução total: **40-45%**

---

## 🎓 Próximos Passos

1. ✅ Leia o `README.md` completo
2. ✅ Revise o `APRESENTACAO.md`
3. ✅ Explore o `gulpfile.js`
4. ✅ Teste editando arquivos em `src/`
5. ✅ Pratique a apresentação

---

## 📚 Links Úteis

- [Documentação Oficial](https://gulpjs.com/)
- [Plugins](https://gulpjs.com/plugins/)
- [GitHub do Gulp](https://github.com/gulpjs/gulp)

---

**Pronto para apresentar! 🎤**
