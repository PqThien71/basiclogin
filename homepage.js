const btnSetting= document.getElementById("btn-setting")
const btnLogout = document.getElementById("btn-logout")
btnSetting.addEventListener("click",handleClickSetting)
btnLogout.addEventListener("click",handleClickLogout)

function handleClickLogout(){
    location.href = "/index.html"
}
function handleClickSetting(){
    location.href = "/html/setting.html"
}