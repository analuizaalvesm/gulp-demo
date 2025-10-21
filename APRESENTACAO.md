# 🎤 Roteiro de Apresentação - Gulp.js

## 📋 Checklist Pré-Apresentação

- [ ] Node.js instalado
- [ ] Projeto clonado/baixado
- [ ] Dependências instaladas (`npm install`)
- [ ] Terminal preparado
- [ ] Navegador aberto
- [ ] Editor de código aberto

## 🎯 Roteiro de Apresentação (15-20 minutos)

### 1️⃣ Introdução (3 minutos)

#### Slide 1: O que é Gulp?

"Gulp.js é uma ferramenta de automação de tarefas JavaScript que usa streams do Node.js para processar arquivos de forma eficiente."

**Pontos-chave:**

- Criado em 2013
- Baseado em código JavaScript
- Usa streams (pipes)
- Mais de 3.000 plugins disponíveis

#### Slide 2: Por que usar?

"Automatizar tarefas repetitivas economiza tempo e evita erros."

**Exemplos de tarefas:**

- Minificação de arquivos
- Compilação de SCSS/LESS
- Otimização de imagens
- Concatenação de scripts
- Live reload durante desenvolvimento

---

### 2️⃣ Estrutura do Projeto (2 minutos)

#### Mostrar estrutura no VS Code:

```
📁 src/          → Arquivos de desenvolvimento
  ├── index.html
  ├── scss/      → Estilos SCSS
  └── js/        → Scripts JavaScript

📁 dist/         → Arquivos otimizados (gerados)
  ├── index.html (minificado)
  ├── css/       (compilado + minificado)
  └── js/        (concatenado + minificado)

📄 gulpfile.js   → Configuração das tarefas
📄 package.json  → Dependências do projeto
```

**Explicar:**

- `src/` = código fonte (editamos aqui)
- `dist/` = código de produção (Gulp gera)
- `gulpfile.js` = "receita" das tarefas

---

### 3️⃣ Demonstração Prática (10 minutos)

#### Passo 1: Mostrar Código Fonte (1 min)

```bash
# Abrir arquivo SCSS
code src/scss/styles.scss
```

**Mostrar:**

- Variáveis SCSS
- Nesting (aninhamento)
- Mixins

```bash
# Mostrar JavaScript
code src/js/main.js
```

**Mostrar:**

- Múltiplos arquivos JS separados
- Comentários detalhados

#### Passo 2: Executar Build (2 min)

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

**Explicar:**

- Cada linha representa uma tarefa
- Tarefas executam em paralelo
- Build completo em segundos

#### Passo 3: Comparar Arquivos (2 min)

**No terminal:**

```bash
# Listar arquivos fonte
ls -lh src/js/

# Listar arquivos gerados
ls -lh dist/js/
```

**Abrir no editor:**

1. `src/scss/styles.scss` (código legível)
2. `dist/css/styles.min.css` (minificado)

**Mostrar diferenças:**

- Espaços removidos
- Comentários removidos
- Código compactado

**Abrir no editor:**

1. `src/js/main.js` (arquivo separado)
2. `dist/js/app.min.js` (concatenado + minificado)

**Destacar:**

- 3 arquivos → 1 arquivo
- Variáveis encurtadas
- Tamanho reduzido

#### Passo 4: Iniciar Servidor de Desenvolvimento (3 min)

```bash
# Iniciar modo watch + servidor
npm start
```

**Aguardar mensagens:**

```
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
    External: http://192.168.1.10:3000
 ---------------------------------------
[Browsersync] Serving files from: ./dist
```

**Abrir navegador:**

- Ir para `http://localhost:3000`
- Mostrar página funcionando

**Demonstrar Live Reload:**

1. **Editar SCSS** (enquanto projeta):
   ```scss
   // Em src/scss/styles.scss
   $primary-color: #e74c3c; // Mudar de azul para vermelho
   ```
2. **Salvar arquivo** (Ctrl+S)

3. **Observar:**
   - Terminal mostra: "Starting 'styles'..."
   - Navegador recarrega automaticamente
   - Cores mudam instantaneamente

**Voltar cor original:**

```scss
$primary-color: #3498db;
```

#### Passo 5: Testar Funcionalidade (2 min)

**No navegador:**

1. Clicar no botão "Testar JavaScript"
2. Observar animação e resultados
3. Abrir DevTools (F12)
4. Ver aba Console (mensagens)
5. Ver aba Network (arquivos carregados)

**Destacar no Network:**

- `app.min.js` → tamanho reduzido
- `styles.min.css` → tamanho reduzido
- Tempo de carregamento rápido

---

### 4️⃣ Análise do Gulpfile (3 minutos)

#### Abrir gulpfile.js

**Estrutura básica:**

```javascript
// 1. Imports
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
    .src(paths.styles.src) // 1. Pegar arquivos
    .pipe(sass()) // 2. Compilar SCSS
    .pipe(cleanCSS()) // 3. Minificar
    .pipe(gulp.dest(paths.styles.dest)); // 4. Salvar
}

// 4. Exportar
exports.styles = styles;
```

**Explicar API do Gulp:**

1. **`gulp.src()`** - Seleciona arquivos
2. **`.pipe()`** - Processa através de plugin
3. **`gulp.dest()`** - Salva resultado

**Analogia:**
"É como uma linha de montagem de fábrica: arquivos entram, passam por várias estações de processamento (pipes), e saem otimizados."

#### Tarefas Compostas:

```javascript
// Paralelo - executam juntas
gulp.parallel(html, styles, scripts);

// Série - executam em sequência
gulp.series(clean, build);
```

---

### 5️⃣ Vantagens e Desvantagens (2 minutos)

#### ✅ VANTAGENS

**Performance:**

- Usa streams (processa na memória)
- 30-50% mais rápido que ferramentas baseadas em arquivos
- Tarefas em paralelo

**Facilidade:**

- API simples: src → pipe → dest
- Código JavaScript normal
- Fácil debug

**Flexibilidade:**

- 3.000+ plugins
- Customização total
- Integra com qualquer ferramenta

**Resultados:**

- 40-60% redução no tamanho dos arquivos
- Build automatizado
- Live reload para desenvolvimento

#### ❌ DESVANTAGENS

**Configuração Manual:**

- Cada tarefa precisa ser configurada
- Mais verboso que ferramentas zero-config

**Manutenção:**

- Muitas dependências para gerenciar
- Plugins podem ficar desatualizados

**Curva de Aprendizado:**

- Requer conhecimento de:
  - Node.js
  - Streams
  - JavaScript assíncrono

**Contexto Atual:**

- Frameworks modernos (Next.js, Vite) têm build integrado
- Menos popular que no auge
- Para SPAs, há alternativas melhores

---

### 6️⃣ Quando Usar Gulp? (1 minuto)

#### ✅ USE GULP QUANDO:

- Sites institucionais / Landing pages
- Projetos com múltiplos tipos de assets
- Necessita controle fino sobre build
- Projeto legado que já usa Gulp
- Automação de tarefas customizadas

#### ❌ CONSIDERE ALTERNATIVAS:

- **Webpack/Vite**: Para SPAs (React, Vue, Angular)
- **npm scripts**: Para projetos muito simples
- **Framework próprio**: Next.js, Nuxt, etc.

---

### 7️⃣ Comparação Rápida

| Ferramenta      | Uso Ideal                             | Complexidade |
| --------------- | ------------------------------------- | ------------ |
| **Gulp**        | Automação geral, sites tradicionais   | Média        |
| **Webpack**     | SPAs, bundling avançado               | Alta         |
| **Vite**        | Desenvolvimento rápido, SPAs modernas | Baixa        |
| **Grunt**       | Projetos legados                      | Média        |
| **npm scripts** | Projetos simples                      | Muito Baixa  |

---

### 8️⃣ Conclusão (1 minuto)

**Resumo:**

1. **Gulp é poderoso** para automação de builds
2. **Performance excelente** com streams
3. **Flexível e extensível** com plugins
4. **Ideal para projetos web tradicionais**
5. **Considere alternativas** para SPAs modernas

**Mensagem Final:**

"Gulp.js continua sendo uma excelente escolha para automação de builds, especialmente em projetos que necessitam de controle fino sobre o processamento de assets. Embora frameworks modernos tenham builds integrados, Gulp ainda é relevante para casos específicos e oferece uma base sólida para entender como build tools funcionam."

---

## 🎬 Encerramento

### Perguntas para Audiência:

1. "Alguém já usou ferramentas de build antes?"
2. "Que tipo de projetos vocês trabalham?"
3. "Dúvidas sobre alguma parte da demonstração?"

### Recursos Finais:

- **Código do projeto**: Disponível no GitHub/compartilhado
- **Documentação**: https://gulpjs.com/
- **Tutorial**: README.md completo no projeto

---

## 📝 Notas para o Apresentador

### Dicas de Apresentação:

1. **Fale com confiança**: Você preparou tudo
2. **Pause após comandos**: Deixe o terminal processar
3. **Explique enquanto roda**: Não deixe silêncio
4. **Mostre entusiasmo**: É uma ferramenta poderosa!
5. **Interaja**: Faça perguntas retóricas

### Possíveis Problemas:

**Se o build falhar:**

- "Vamos verificar o erro no terminal"
- Mostrar que erros acontecem e como debugar
- Ter backup: screenshots/vídeo

**Se o servidor não iniciar:**

- Verificar porta 3000 (pode estar em uso)
- Matar processo: `npx kill-port 3000`

**Se o live reload não funcionar:**

- Refresh manual
- Explicar que é feature extra, não essencial

### Tempo Extra (se sobrar):

- Mostrar mais plugins disponíveis
- Demonstrar criação de tarefa customizada
- Explicar integração com CI/CD

### Se Faltar Tempo:

- Pular comparação detalhada de arquivos
- Reduzir explicação do gulpfile
- Focar em demo prática

---

## ✅ Checklist Pós-Apresentação

- [ ] Agradecer a atenção
- [ ] Disponibilizar código
- [ ] Responder perguntas
- [ ] Compartilhar recursos adicionais

**Boa sorte na apresentação! 🚀**
