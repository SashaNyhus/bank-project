
//start-menu
document.getElementById("goto-account-creation").addEventListener("click", gotoAccountCreation);
document.getElementById("goto-account-login").addEventListener("click", gotoAccountLogin);

//account-creation
document.getElementById("account-creation-exit").addEventListener("click", exitAccountCreation);

//login
document.getElementById("exit-account-login").addEventListener("click", exitAccountLogin)

function gotoAccountCreation(){
    hideMenu("start-menu");
    showFlexMenu("account-creation")
}

function gotoAccountLogin(){
    hideMenu("start-menu");
    showFlexMenu("account-login")
}

function exitAccountCreation(){
    hideMenu("account-creation")
    showFlexMenu("start-menu")
}

function exitAccountLogin(){
    hideMenu("account-login");
    showFlexMenu("start-menu")
}

function hideMenu(id){
    document.getElementById(id).style.display="none"
}

function showFlexMenu(id){
    document.getElementById(id).style.display="flex"
}