const btnLogin = document.getElementById("btn-login")
const btnSignup = document.getElementById("btn-signup")
btnLogin.addEventListener("click",handleClickLogin)
btnSignup.addEventListener("click", handleClickSignup)
function handleClickLogin(){
    location.href = "/html/login.html"
}

function handleClickSignup(){
    location.href = "/html/signup.html"
}
