/**
 * main.js - Script principal da aplicação
 * Este arquivo será concatenado com outros scripts
 */

// Função para atualizar contadores
function updateCounters() {
  const filesCount = document.getElementById("filesCount");
  if (filesCount) {
    filesCount.textContent = "12";
  }
}

// Função para mostrar mensagem de boas-vindas
function showWelcomeMessage() {
  console.log("🚀 Aplicação Gulp.js carregada com sucesso!");
  console.log("📦 Build realizado pelo Gulp.js");
  console.log("✅ Todos os arquivos foram processados e otimizados");
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  showWelcomeMessage();
  updateCounters();
});
