const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener('click', handleClickLogin);
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

function handleClickLogin(){
  console.log(usernameInput.value);
  console.log(passwordInput.value);
}