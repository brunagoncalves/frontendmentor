// Selecionar os elementos
const subscribeButton = document.querySelector(".btn-subscribe");
const modal = document.querySelector(".modal-subscribe");
const dismissButton = modal.querySelector(".btn-subscribe");
const newsletterSection = document.querySelector(".section-newsletter");

// Exibir o modal ao clicar no botão de "Subscribe"
subscribeButton.addEventListener("click", (e) => {
  e.preventDefault(); // Evita o envio do formulário (caso seja necessário)
  modal.style.display = "flex"; // Exibe o modal
  newsletterSection.style.display = "none"; // Oculta a seção de newsletter
});

// Fechar o modal ao clicar no botão "Dismiss message"
dismissButton.addEventListener("click", () => {
  modal.style.display = "none"; // Oculta o modal
  newsletterSection.style.display = "block"; // Reexibe a seção de newsletter
});
