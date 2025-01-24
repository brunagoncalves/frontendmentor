// Verificar se estamos na página de sucesso
if (window.location.pathname.includes("success.html")) {
  // Recuperar o e-mail armazenado no localStorage
  const subscribedEmail = localStorage.getItem("subscribedEmail");

  // Exibir o e-mail dinâmico no elemento <strong>
  if (subscribedEmail) {
    const emailStrong = document.querySelector("strong");
    emailStrong.textContent = subscribedEmail;
  }

  // Adicionar evento ao botão "Dismiss message"
  const dismissButton = document.getElementById("dismiss-button");
  dismissButton.addEventListener("click", function () {
    // Redirecionar de volta para index.html
    window.location.href = "index.html";
  });
} else {
  // Código para a página inicial (index.html)
  document
    .getElementById("subscribe-button")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Impedir envio do formulário

      const emailInput = document.getElementById("email");
      const errorMessage = document.getElementById("email-error");

      // Validação de e-mail com regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailInput.value.trim())) {
        // Exibir mensagem de erro
        errorMessage.classList.remove("hidden");

        // Estilizar o input com erro
        emailInput.classList.remove(
          "border-gray",
          "placeholder:text-gray",
          "text-darkNavy"
        );
        emailInput.classList.add(
          "border-vermelion",
          "placeholder:text-vermelion",
          "text-vermelion",
          "bg-vermelion",
          "bg-opacity-15"
        );
      } else {
        // Salvar o e-mail no localStorage
        localStorage.setItem("subscribedEmail", emailInput.value.trim());

        // Redirecionar para a página de sucesso
        window.location.href = "success.html";
      }
    });
}
