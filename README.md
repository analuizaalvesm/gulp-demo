# Gulp.js - Projeto de Demonstração

## Visão Geral

Este projeto demonstra o uso do Gulp.js como ferramenta de automação de builds para aplicações web. O sistema processa automaticamente HTML, SCSS, JavaScript e imagens, gerando versões otimizadas para produção.

---

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (incluído com Node.js)
- Editor de código
- Navegador web moderno

---

## Instalação

```bash
# Navegar até o diretório do projeto
cd gulpjs

# Instalar dependências
npm install

# Verificar instalação do Gulp
npx gulp --version
```

Tempo estimado de instalação: 2-3 minutos

---

## Comandos Disponíveis

### Comandos Principais

```bash
# Executar build completo (limpa e processa todos os arquivos)
npm run build

# Iniciar servidor de desenvolvimento com watch mode
npm start

# Limpar diretório de build
npm run clean
```

### Tarefas Individuais

```bash
npx gulp html      # Processar arquivos HTML
npx gulp styles    # Compilar SCSS para CSS
npx gulp scripts   # Processar arquivos JavaScript
npx gulp images    # Otimizar imagens
```

---

## Estrutura do Projeto

```
src/                    # Código-fonte (desenvolvimento)
├── index.html
├── scss/              # Folhas de estilo SCSS
│   └── styles.scss
├── js/                # Scripts JavaScript
│   ├── main.js
│   ├── interactive.js
│   └── utils.js
└── images/            # Imagens originais

dist/                   # Arquivos compilados (produção)
├── index.html         # HTML minificado
├── css/               # CSS compilado e minificado
├── js/                # JavaScript concatenado e minificado
└── images/            # Imagens otimizadas

gulpfile.js            # Configuração do Gulp
package.json           # Dependências e scripts
```

---

## Pipeline de Build

### Tarefas Configuradas

| Tarefa    | Descrição                                           | Redução de Tamanho |
| --------- | --------------------------------------------------- | ------------------ |
| `clean`   | Remove o diretório `dist` para garantir build limpo | -                  |
| `html`    | Minifica HTML, remove espaços e comentários         | ~28%               |
| `styles`  | Compila SCSS para CSS e minifica o resultado        | ~46%               |
| `scripts` | Concatena múltiplos arquivos JS e minifica          | ~40%               |
| `images`  | Comprime imagens mantendo qualidade visual          | 30-60%             |
| `watch`   | Monitora alterações e re-executa tarefas            | -                  |
| `server`  | Inicia servidor local com live reload               | -                  |

**Redução média total:** 40-45%

---

## Uso em Desenvolvimento

### Iniciar Ambiente de Desenvolvimento

```bash
npm start
```

Este comando irá:

1. Executar o build completo do projeto
2. Iniciar servidor HTTP local na porta 3000
3. Ativar monitoramento de arquivos (watch mode)
4. Habilitar live reload no navegador

Acesse a aplicação em: `http://localhost:3000`

### Workflow de Desenvolvimento

1. **Edição de arquivos:** Modifique arquivos na pasta `src/`
2. **Processamento automático:** Gulp detecta mudanças e reprocessa arquivos
3. **Atualização automática:** Navegador recarrega automaticamente
4. **Validação:** Verifique mudanças no navegador

### Exemplo de Live Reload

Ao editar `src/scss/styles.scss`:

```scss
$primary-color: #3498db; // Alterar esta variável
```

O Gulp irá automaticamente:

- Compilar SCSS para CSS
- Minificar o CSS resultante
- Atualizar o navegador

---

## Análise de Resultados

### Comparação de Arquivos

Para comparar tamanhos antes e depois do build:

```bash
# Listar arquivos fonte
ls -lh src/js/
ls -lh src/scss/

# Listar arquivos processados
ls -lh dist/js/
ls -lh dist/css/
```

### Diferenças de Processamento

**HTML:**

- Fonte: Formatado com indentação e espaços
- Produção: Minificado em uma única linha

**CSS:**

- Fonte: SCSS com variáveis, mixins e comentários
- Produção: CSS puro, minificado sem espaços

**JavaScript:**

- Fonte: 3 arquivos separados com comentários
- Produção: 1 arquivo concatenado e minificado

### Inspeção no Navegador

Use as ferramentas de desenvolvedor (F12) para analisar:

**Console:**

- Mensagens de log da aplicação
- Confirmação de carregamento de scripts

**Network:**

- Tamanho dos arquivos carregados
- Tempo de carregamento
- Número de requisições HTTP

**Sources:**

- Visualização do código minificado
- Estrutura de arquivos carregados

---

## Configuração do Gulpfile

### Estrutura Básica

```javascript
// 1. Importar módulos necessários
const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

// 2. Definir caminhos dos arquivos
const paths = {
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
};

// 3. Criar função de tarefa
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.styles.dest));
}

// 4. Exportar tarefa
exports.styles = styles;
```

### API Principal do Gulp

- `gulp.src(globs)` - Seleciona arquivos para processar
- `.pipe(plugin())` - Aplica transformação através de plugin
- `gulp.dest(path)` - Define destino dos arquivos processados
- `gulp.watch(globs, task)` - Monitora arquivos e executa tarefas
- `gulp.series(...tasks)` - Executa tarefas em sequência
- `gulp.parallel(...tasks)` - Executa tarefas em paralelo

### Composição de Tarefas

```javascript
// Tarefas em paralelo (executam simultaneamente)
const buildAssets = gulp.parallel(html, styles, scripts, images);

// Tarefas em série (executam sequencialmente)
const build = gulp.series(clean, buildAssets);
```

---

## Solução de Problemas

### Porta 3000 em uso

```bash
# Windows
npx kill-port 3000

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Módulos não encontrados

```bash
# Remover instalação existente
rm -rf node_modules package-lock.json

# Reinstalar dependências
npm install
```

### Build lento

- Adicione a pasta `node_modules` à lista de exclusões do antivírus
- Verifique se há processos em segundo plano consumindo recursos
- Considere usar SSD ao invés de HDD

### Erros de compilação SCSS

- Verifique sintaxe do SCSS
- Confirme se todas as variáveis estão definidas
- Verifique imports de arquivos parciais

---

## Métricas de Performance

### Redução de Tamanho

| Tipo de Arquivo         | Tamanho Original | Tamanho Otimizado | Redução |
| ----------------------- | ---------------- | ----------------- | ------- |
| HTML                    | 2.5 KB           | 1.8 KB            | 28%     |
| CSS (compilado de SCSS) | 15 KB            | 8 KB              | 46%     |
| JavaScript (3 arquivos) | 20 KB            | 12 KB (1 arquivo) | 40%     |
| **Total**               | **37.5 KB**      | **21.8 KB**       | **42%** |

### Performance do Build

- **Tempo de build completo:** 5-10 segundos
- **Tempo de live reload:** < 1 segundo
- **Redução de requisições HTTP:** 3 arquivos JS → 1 arquivo JS

### Benefícios

- Menor tempo de carregamento da página
- Redução no consumo de banda
- Melhor experiência do usuário
- Melhor pontuação em ferramentas de análise (Lighthouse, PageSpeed)

---

## Plugins Utilizados

- **gulp** - Task runner principal
- **gulp-sass** - Compilação de SCSS
- **gulp-clean-css** - Minificação de CSS
- **gulp-concat** - Concatenação de arquivos
- **gulp-uglify** - Minificação de JavaScript
- **gulp-rename** - Renomeação de arquivos
- **gulp-htmlmin** - Minificação de HTML
- **gulp-imagemin** - Otimização de imagens
- **browser-sync** - Servidor de desenvolvimento e live reload
- **del** - Remoção de arquivos/diretórios

---

## Recursos Adicionais

- [Documentação oficial do Gulp](https://gulpjs.com/)
- [Lista de plugins](https://gulpjs.com/plugins/)
- [Receitas e exemplos](https://github.com/gulpjs/gulp/tree/master/docs/recipes)
