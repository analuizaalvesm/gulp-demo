# 🎤 Demonstração Gulp.js

## 📋 Checklist

- [ ] Node.js instalado
- [ ] Dependências instaladas (`npm install`)
- [ ] Terminal preparado
- [ ] Navegador aberto
- [ ] Editor de código aberto

---

## 🚀 Instalação

```bash
# 1. Entrar na pasta do projeto
cd gulpjs

# 2. Instalar dependências (aguarde ~2-3 minutos)
npm install

# 3. Verificar instalação
npx gulp --version
```

---

## 📋 Comandos Disponíveis

```bash
# Build completo (limpa e gera todos os arquivos)
npm run build

# Modo desenvolvimento (build + watch + servidor)
npm start

# Limpar pasta dist
npm run clean
```

### Tarefas Individuais (opcional)

```bash
npx gulp html      # Processar apenas HTML
npx gulp styles    # Compilar apenas SCSS
npx gulp scripts   # Processar apenas JavaScript
npx gulp images    # Otimizar apenas imagens
```

---

## 📁 Estrutura do Projeto

```
src/                    # Arquivos de desenvolvimento (você edita aqui)
├── index.html
├── scss/              # Estilos SCSS
│   └── styles.scss
├── js/                # Scripts JavaScript
│   ├── main.js
│   ├── interactive.js
│   └── utils.js
└── images/

dist/                   # Arquivos otimizados (Gulp gera)
├── index.html         # HTML minificado
├── css/               # CSS compilado + minificado
├── js/                # JS concatenado + minificado
└── images/            # Imagens otimizadas
```

---

## ⚙️ Tarefas Configuradas

| Tarefa      | O que faz                                  | Redução |
| ----------- | ------------------------------------------ | ------- |
| **clean**   | Remove pasta `dist`                        | -       |
| **html**    | Minifica HTML (remove espaços/comentários) | ~28%    |
| **styles**  | Compila SCSS → CSS + minifica              | ~46%    |
| **scripts** | Concatena 3 arquivos JS → 1 + minifica     | ~40%    |
| **images**  | Comprime imagens                           | ~30-60% |
| **watch**   | Monitora mudanças e re-executa tarefas     | -       |
| **server**  | Servidor local + live reload               | -       |

**Redução total de tamanho: ~40-45%**

---

## 🎯 Roteiro de Apresentação (15-20 min)

### 1️⃣ Mostrar Estrutura do Projeto (2 min)

```bash
# Listar arquivos fonte
ls -la src/

# Mostrar estrutura no editor
code .
```

**Explicar:**

- `src/` = código de desenvolvimento (legível)
- `dist/` = código de produção (otimizado)
- `gulpfile.js` = configuração das tarefas

---

### 2️⃣ Executar Build (3 min)

```bash
# Limpar build anterior
npm run clean

# Executar build completo
npm run build
```

**Observar no terminal:**

```
[12:34:56] Starting 'clean'...
[12:34:56] Finished 'clean'...
[12:34:56] Starting 'build'...
[12:34:56] Starting 'html'...
[12:34:56] Starting 'styles'...
[12:34:56] Starting 'scripts'...
[12:34:57] Finished 'html'...
[12:34:57] Finished 'styles'...
[12:34:57] Finished 'scripts'...
[12:34:57] Finished 'build'...
```

**Destacar:**

- Cada linha = uma tarefa
- Tarefas executam em paralelo
- Build completo em segundos

---

### 3️⃣ Comparar Arquivos Antes/Depois (3 min)

```bash
# Ver tamanho dos arquivos fonte
ls -lh src/js/
ls -lh src/scss/

# Ver tamanho dos arquivos gerados
ls -lh dist/js/
ls -lh dist/css/
```

**Abrir no editor e comparar:**

1. **HTML:**

   - `src/index.html` → formatado, identado
   - `dist/index.html` → 1 linha, minificado

2. **CSS:**

   - `src/scss/styles.scss` → variáveis, mixins, comentários
   - `dist/css/styles.min.css` → compactado, sem espaços

3. **JavaScript:**
   - `src/js/` → 3 arquivos separados
   - `dist/js/app.min.js` → 1 arquivo concatenado + minificado

---

### 4️⃣ Demonstrar Servidor + Live Reload (5 min)

```bash
# Iniciar servidor de desenvolvimento
npm start
```

**Aguardar:**

```
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
 ---------------------------------------
[Browsersync] Serving files from: ./dist
```

**Demonstração:**

1. **Abrir navegador** em `http://localhost:3000`
2. **Clicar** no botão "Testar JavaScript"
3. **Observar** resultados animados

**Live Reload:**

1. Abrir `src/scss/styles.scss`
2. Mudar variável:
   ```scss
   $primary-color: #e74c3c; // vermelho
   ```
3. **Salvar** (Ctrl+S)
4. **Observar:** navegador recarrega automaticamente!
5. **Voltar** cor original:
   ```scss
   $primary-color: #3498db; // azul
   ```

---

### 5️⃣ Analisar Resultado no DevTools (3 min)

**No navegador (F12):**

1. **Aba Console:**

   - Ver mensagens de log
   - Confirmar scripts carregados

2. **Aba Network:**

   - Ver `app.min.js` (tamanho reduzido)
   - Ver `styles.min.css` (tamanho reduzido)
   - Ver tempo de carregamento rápido

3. **Aba Sources:**
   - Ver código minificado

---

### 6️⃣ Explicar o gulpfile.js (2 min)

**Estrutura básica:**

```javascript
// 1. Importar plugins
const gulp = require("gulp");
const sass = require("gulp-sass");

// 2. Definir caminhos
const paths = {
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
};

// 3. Criar tarefa
function styles() {
  return gulp
    .src(paths.styles.src) // Pegar arquivos
    .pipe(sass()) // Compilar SCSS
    .pipe(cleanCSS()) // Minificar
    .pipe(gulp.dest(paths.styles.dest)); // Salvar
}

// 4. Exportar
exports.styles = styles;
```

**API do Gulp:**

- `gulp.src()` → Seleciona arquivos
- `.pipe()` → Processa através de plugin
- `gulp.dest()` → Salva resultado

**Analogia:**
"Como uma linha de montagem: arquivos entram, passam por várias estações (pipes), e saem otimizados."

---

### 7️⃣ Tarefas Compostas (1 min)

```javascript
// Paralelo - executam juntas
gulp.parallel(html, styles, scripts, images);

// Série - executam em sequência
gulp.series(clean, build);
```

---

## 🐛 Solução de Problemas

### Erro: "Port 3000 already in use"

```bash
# Windows
npx kill-port 3000
```

### Erro: "Cannot find module 'gulp'"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build muito lento

- Adicionar pasta `node_modules` à exclusão do antivírus

---

## 📊 Resultados Esperados

### Tamanhos:

| Arquivo         | Antes (src/) | Depois (dist/)     | Redução  |
| --------------- | ------------ | ------------------ | -------- |
| HTML            | ~2.5 KB      | ~1.8 KB            | **-28%** |
| CSS             | ~15 KB       | ~8 KB              | **-46%** |
| JS (3 arquivos) | ~20 KB       | ~12 KB (1 arquivo) | **-40%** |
| **Total**       | **~37.5 KB** | **~21.8 KB**       | **-42%** |

### Performance:

- ⚡ Build time: **5-10 segundos**
- 🔄 Live reload: **< 1 segundo**
- 📦 Requisições HTTP: **3 JS → 1 JS**
