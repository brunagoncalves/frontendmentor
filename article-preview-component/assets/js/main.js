const shareButton = document.getElementById("btn-share");
const shareButtonActive = document.getElementById("btn-share-active");

const mobileAuthorCard = document.querySelector(".author-card");
const mobileAuthorShareActive = document.querySelector(".author-card-share");
const desktopShare = document.querySelector(".share");

const iconShare = document.querySelector(".icon");

// Verifica se é desktop
const isDesktop = () => window.innerWidth >= 768;

// Função para lidar com o clique do botão share no desktop
const handleDesktopShare = () => {
  desktopShare.style.display = desktopShare.style.display === "none" ? "block" : "none";
  mobileAuthorShareActive.style.display = "none";
};

// Função para lidar com o clique do botão share no mobile
const handleMobileShare = () => {
  const isMobileVisible = mobileAuthorCard.style.display !== "none";
  mobileAuthorCard.style.display = isMobileVisible ? "none" : "flex";
  mobileAuthorShareActive.style.display = isMobileVisible ? "flex" : "none";
};

const toggleIconActiveClass = () => {
  iconShare.classList.toggle("icon-active");
};

// Adiciona o evento de clique ao botão share
shareButton.addEventListener("click", () => {
  if (isDesktop()) {
    handleDesktopShare();
    toggleIconActiveClass();
  } else {
    handleMobileShare();
  }
});

// Adiciona o evento de clique ao botão share active no mobile
shareButtonActive.addEventListener("click", () => {
  const isMobileVisible = mobileAuthorCard.style.display !== "none";
  mobileAuthorCard.style.display = isMobileVisible ? "none" : "flex";
  mobileAuthorShareActive.style.display = isMobileVisible ? "flex" : "none";
});

// Garante que o layout esteja correto ao redimensionar a janela
window.addEventListener("resize", () => {
  if (isDesktop()) {
    // Configuração para desktop
    mobileAuthorCard.style.display = "flex";
    desktopShare.style.display = "none"; // Oculta a parte de share inicialmente
    mobileAuthorShareActive.style.display = "none";
  } else {
    // Configuração para mobile
    mobileAuthorCard.style.display = "flex"; // Padrão inicial no mobile
    desktopShare.style.display = "none";
    mobileAuthorShareActive.style.display = "none";
  }
});

// Inicializa o layout com base na largura da tela
window.dispatchEvent(new Event("resize"));
