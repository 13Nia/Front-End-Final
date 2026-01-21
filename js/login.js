document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  togglePassword.addEventListener("click", () => {
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";

    togglePassword.src = isHidden
      ? "./svgs/visibility_svgs/on.svg"
      : "./svgs/visibility_svgs/off.svg";
  });

  function showError(input, errorBox, message) {
    input.classList.add("input_error");

    errorBox.querySelector(".error_message").textContent = message;
    errorBox.style.visibility = "visible";

    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 300);
  }

  function clearError(input, errorBox) {
    input.classList.remove("input_error");
    errorBox.style.visibility = "hidden";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    if (!email.value.trim()) {
      showError(email, emailError, "ელ.ფოსტა აუცილებელია");
      valid = false;
    } else if (!emailRegex.test(email.value)) {
      showError(email, emailError, "შეიყვანე სწორი ელ.ფოსტა");
      valid = false;
    } else {
      clearError(email, emailError);
    }

    if (!password.value.trim()) {
      showError(password, passwordError, "პაროლი აუცილებელია");
      valid = false;
    } else if (!passwordRegex.test(password.value)) {
      showError(password, passwordError, "მინიმუმ 6 სიმბოლო");
      valid = false;
    } else {
      clearError(password, passwordError);
    }

    if (valid) {
        window.location.href = "./index.html"; 
    }
  });
});
