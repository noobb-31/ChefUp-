// Exemplo simples de mensagem ao enviar formulário
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! 🍽️");
  this.reset();
});