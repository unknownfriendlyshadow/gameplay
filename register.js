const registerCard = document.querySelector(".register-card");
const nextButton = document.querySelector(".next-btn");
const confirmPanel = document.querySelector(".confirm-panel");
const eyeButton = document.querySelector(".eye-btn");
const passwordInput = document.querySelector(".password-field input");

// Після натискання "Далі" показуємо другий крок із підтвердженням паролю.
nextButton.addEventListener("click", () => {
  registerCard.classList.add("is-confirm");
  confirmPanel.hidden = false;
});

// Перемикає видимість паролю у першому полі.
eyeButton.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
