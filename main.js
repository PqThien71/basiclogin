const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener('click', handleClickLogin);
const usernameInputElement = document.getElementById("username-input");
const passwordInputElement  = document.getElementById("password-input");
const database = [
  {"username":"phamthien","password":"123"},
  {"username":"phamthien1","password":"1234"},
  {"username":"phamthien2","password":"12345"}
]

function handleClickLogin(){
  let usernameInput = usernameInputElement.value 
  let passwordInput = passwordInputElement.value
  if(!usernameInput || !passwordInput){
    alert("username or pasword required")
  }
  else if(usernameInput.length < 3 || passwordInput.length < 3 ){
    alert("username or pasword length must be more than 3")
  }
  else {
    const result = queryLogin(usernameInput,passwordInput)
    if (!result){
      alert("username or pasword incorrect")
    }
    else{
      location.href = "/html/homepage.html"
    }
  }

}

function queryLogin(usernameInput,passwordInput){
    const result = database.find(function(item){
      return item.username === usernameInput && item.password === passwordInput
    })
    return result
  }

