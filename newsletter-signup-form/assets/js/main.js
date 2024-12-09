document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const dismissBtn = document.getElementById("dismiss-btn");

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "message-ok.html";
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});
