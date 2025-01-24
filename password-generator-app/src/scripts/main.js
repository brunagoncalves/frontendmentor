document.addEventListener("DOMContentLoaded", () => {
  const passwordOutput = document.getElementById("passwordOutput");
  const copyButton = document.getElementById("copyButton");
  const lengthSlider = document.getElementById("lengthSlider");
  const lengthValue = document.getElementById("lengthValue");
  const generateButton = document.getElementById("generateButton");
  const strengthText = document.getElementById("strengthText");

  const checkboxes = {
    uppercase: document.getElementById("uppercaseCheck"),
    lowercase: document.getElementById("lowercaseCheck"),
    numbers: document.getElementById("numbersCheck"),
    symbols: document.getElementById("symbolsCheck"),
  };

  const chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  // Inicializar o estado dos checkboxes e força da senha
  function initializeState() {
    // Resetar checkboxes
    Object.values(checkboxes).forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Resetar strength meter
    strengthText.textContent = "";
    const bars = document.querySelectorAll(".strength-bars .bar");
    bars.forEach((bar) => {
      bar.className = "bar";
    });

    // Resetar password output
    passwordOutput.value = "";
    passwordOutput.placeholder = "P4$5W0rD!";
  }

  // Atualizar o valor do slider
  lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
    const progress = (lengthSlider.value / lengthSlider.max) * 100;
    lengthSlider.style.setProperty("--progress", `${progress}%`);
  });

  lengthSlider.style.setProperty("--progress", "0%");

  // Gerar senha quando as opções são alteradas
  Object.values(checkboxes).forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (hasCheckedOptions()) {
        generatePassword();
      }
    });
  });

  // Verificar se há opções selecionadas
  function hasCheckedOptions() {
    return Object.values(checkboxes).some((checkbox) => checkbox.checked);
  }

  // Função para gerar senha
  function generatePassword() {
    let availableChars = "";
    let password = "";

    // Verificar quais opções estão selecionadas
    Object.entries(checkboxes).forEach(([key, checkbox]) => {
      if (checkbox.checked) {
        availableChars += chars[key];
      }
    });

    // Se nenhuma opção estiver selecionada, não gerar senha
    if (availableChars === "") {
      passwordOutput.value = "";
      updateStrengthIndicator("");
      return;
    }

    // Gerar senha
    const length = parseInt(lengthSlider.value);
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }

    passwordOutput.value = password;
    updateStrengthIndicator(password);
  }

  // Função para calcular e atualizar o indicador de força
  function updateStrengthIndicator(password) {
    let score = 0;
    const bars = document.querySelectorAll(".strength-bars .bar");

    // Resetar todas as barras
    bars.forEach((bar) => {
      bar.className = "bar";
    });

    // Se não houver senha, manter strength meter zerado
    if (!password) {
      strengthText.textContent = "";
      return;
    }

    // Critérios de pontuação
    if (password.length >= 12) score += 2;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    // Atualizar texto e barras baseado na pontuação
    let strengthClass = "";
    if (score <= 1) {
      strengthText.textContent = "TOO WEAK!";
      strengthClass = "too-weak";
      bars[0].classList.add(strengthClass);
    } else if (score <= 2) {
      strengthText.textContent = "WEAK";
      strengthClass = "weak";
      bars[0].classList.add(strengthClass);
      bars[1].classList.add(strengthClass);
    } else if (score <= 4) {
      strengthText.textContent = "MEDIUM";
      strengthClass = "medium";
      bars[0].classList.add(strengthClass);
      bars[1].classList.add(strengthClass);
      bars[2].classList.add(strengthClass);
    } else {
      strengthText.textContent = "STRONG";
      strengthClass = "strong";
      bars.forEach((bar) => bar.classList.add(strengthClass));
    }
  }

  copyButton.addEventListener("click", async () => {
    if (!passwordOutput.value) return; // Não copiar se não houver senha

    try {
      await navigator.clipboard.writeText(passwordOutput.value);

      // Feedback visual
      const originalSvg = copyButton.innerHTML;
      const feedbackContent = `
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="color: #a4ffaf; font-size: 1rem;">COPIED</span>
          <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#a4ffaf" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8"/>
          </svg>
        </div>
      `;

      copyButton.innerHTML = feedbackContent;

      setTimeout(() => {
        copyButton.innerHTML = originalSvg;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy password!");
    }
  });

  // Gerar senha apenas quando o botão for clicado
  generateButton.addEventListener("click", () => {
    if (hasCheckedOptions()) {
      generatePassword();
    }
  });

  // Inicializar o estado ao carregar a página
  initializeState();
});
