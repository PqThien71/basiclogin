const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener('click', handleClickLogin);
const btnSignup = document.getElementById("btn-signup");
btnSignup.addEventListener('click', handleClickSignup);
const usernameInputElement = document.getElementById("username-input");
const passwordInputElement  = document.getElementById("password-input");
const errorMsg = document.getElementById("error-validate-login")
const database = [
  {"username":"phamthien","password":"123"},
  {"username":"phamthien1","password":"1234"},
  {"username":"phamthien2","password":"12345"}
]

function handleClickLogin(){
  let usernameInput = usernameInputElement.value 
  let passwordInput = passwordInputElement.value
  if(!usernameInput || !passwordInput){
    errorMsg.style.display = "block"
    errorMsg.innerHTML = "Account or password cannot be blank"
  }
  else if(usernameInput.length < 3 || passwordInput.length < 3 ){
    errorMsg.style.display = "block"
    errorMsg.innerHTML = "Account or password is too short"
  }
  else {
    const result = queryLogin(usernameInput,passwordInput)
    if (!result){
      errorMsg.style.display = "block"
      errorMsg.innerHTML = "Incorrect account or password"
    }
    else{
      location.href = "/html/homepage.html"
    }
  }

}

function handleClickSignup(){
  location.href = "/html/signup.html"
}

function queryLogin(usernameInput,passwordInput){
    const result = database.find(function(item){
      return item.username === usernameInput && item.password === passwordInput
    })
    return result
  }

  
