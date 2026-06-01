const eyeButton = document.querySelector(".eye-btn");
const passwordInput = document.querySelector(".password-field input");

// Перемикає видимість паролю на сторінці авторизації.
eyeButton.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
