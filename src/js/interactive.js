/**
 * interactive.js - Funcionalidades interativas
 * Este arquivo será concatenado com main.js pelo Gulp
 */

// Função para criar animação de processamento
function showProcessingAnimation(element) {
  let dots = 0;
  const interval = setInterval(() => {
    dots = (dots + 1) % 4;
    element.innerHTML = `<span style="color: #3498db;">Processando${".".repeat(
      dots
    )}</span>`;
  }, 300);

  return interval;
}

// Função para demonstrar o processamento do Gulp
function demonstrateGulpProcessing() {
  const output = document.getElementById("output");
  if (!output) return;

  const animationInterval = showProcessingAnimation(output);

  setTimeout(() => {
    clearInterval(animationInterval);

    const results = [
      "✅ HTML minificado: 2.5KB → 1.8KB (28% redução)",
      "✅ CSS compilado e minificado: 15KB → 8KB (46% redução)",
      "✅ JavaScript concatenado e minificado: 20KB → 12KB (40% redução)",
      "✅ Imagens otimizadas: 500KB → 280KB (44% redução)",
      "🎉 Build concluído com sucesso!",
    ];

    let html = '<div style="line-height: 1.8;">';
    results.forEach((result, index) => {
      html += `<div style="animation: fadeInUp 0.5s ease ${
        index * 0.1
      }s both;">${result}</div>`;
    });
    html += "</div>";

    output.innerHTML = html;
  }, 2000);
}

// Event listener para o botão de teste
document.addEventListener("DOMContentLoaded", function () {
  const testButton = document.getElementById("testButton");
  if (testButton) {
    testButton.addEventListener("click", demonstrateGulpProcessing);
  }
});
