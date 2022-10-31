const btnDashboard = document.getElementById("btn-dashboard")
const btnLogout = document.getElementById("btn-logout")
btnDashboard.addEventListener("click",handleClickDashboard)
btnLogout.addEventListener("click",handleClickLogout)

function handleClickLogout(){
    location.href = "/index.html"
}

function handleClickDashboard(){
    location.href = "/html/homepage.html"
}