const btnSignup = document.getElementById("btn-signup")
const btnLogin = document.getElementById("btn-login")
const usernameInputElement = document.getElementById("username-input");
const passwordInputElement  = document.getElementById("password-input");
const rePasswordInputElement = document.getElementById("retype-password-input")
const errorMsg = document.getElementById("error-validate-login")
// const errorMsgText = document.getElementById()

btnLogin.addEventListener("click",handleClickLogin)
btnSignup.addEventListener("click", handleClickSignup)
var db = [{"username":"phamthien","password":"123"}]
function handleClickSignup(){
    let usernameInput = usernameInputElement.value 
    let passwordInput = passwordInputElement.value
    let rePasswordInput = rePasswordInputElement.value
    if(!usernameInput || !passwordInput || !rePasswordInput){
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Account or password cannot be blank"
      }
    else if(passwordInput != rePasswordInput){
        errorMsg.style.display = "block"
        errorMsg.innerHTML  = "Password does not match"
    }
    else if(usernameInput.length < 3 || passwordInput.length < 3  ){
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Account or password is too short"
      }
    else if (querySignup(usernameInput)){
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Account already exists"
    }
    else{
        db.push({"username":usernameInput ,"password": passwordInput})
        console.log(db)
    }
}


function handleClickLogin(){
    location.href = "/html/login.html"
}

function querySignup(usernameInput){
    for (let i = 0; i < db.length; i++) {
        if (db[i].username === usernameInput) {
          return true
        }
        else{
            return false
        }
      }
  }
