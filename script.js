const submitBtn = document.querySelector('button[type="submit"]');
const password = document.querySelector('input[id="password"]');
const confPassword = document.querySelector('input[id="conf-password"]');
const passwordConf = document.querySelector('.password-status');
const formQuestions = document.querySelector('fieldset');

submitBtn.addEventListener("click", () => {
    if (password.value !== confPassword.value) {
        passwordConf.textContent = "Passwords are not the same. Try again.";
        passwordConf.style.color = "red";
    }
    else {
        passwordConf.textContent = "";
    }
});