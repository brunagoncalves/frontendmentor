document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("SEU_USER_ID"); // Substitua pelo seu User ID

  const form = document.querySelector(".form");
  const inputEmail = form.querySelector("input[type='email']");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = inputEmail.value;

    if (!email || !email.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Configurar os dados do e-mail
    const templateParams = {
      email: email, // O e-mail do usuário
      message: "Obrigado por se inscrever em nossa newsletter!", // Mensagem personalizada
    };

    // Enviar o e-mail
    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", templateParams).then(
      (response) => {
        alert("E-mail enviado com sucesso!");
        console.log("SUCESSO:", response);
      },
      (error) => {
        alert("Erro ao enviar o e-mail. Tente novamente.");
        console.error("ERRO:", error);
      }
    );
  });
});
