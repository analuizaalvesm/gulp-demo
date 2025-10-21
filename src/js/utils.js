/**
 * utils.js - Funções utilitárias
 * Este arquivo será concatenado com os outros scripts
 */

// Utilitário para formatação de bytes
function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

// Utilitário para calcular economia de tamanho
function calculateSavings(original, compressed) {
  const savings = ((original - compressed) / original) * 100;
  return Math.round(savings * 10) / 10;
}

// Utilitário para log estilizado
function styledLog(message, type = "info") {
  const styles = {
    info: "color: #3498db; font-weight: bold;",
    success: "color: #2ecc71; font-weight: bold;",
    warning: "color: #f39c12; font-weight: bold;",
    error: "color: #e74c3c; font-weight: bold;",
  };
  console.log(`%c${message}`, styles[type] || styles.info);
}

// Exportar utilitários (quando necessário)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    formatBytes,
    calculateSavings,
    styledLog,
  };
}
