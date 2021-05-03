export function gotoAccountCreation(){
    hideMenu("start-menu");
    showFlexMenu("account-creation")
}

export function gotoAccountLogin(){
    hideMenu("start-menu");
    showFlexMenu("account-login")
}

export function exitAccountCreation(){
    hideMenu("account-creation")
    showFlexMenu("start-menu")
}

export function exitAccountLogin(){
    hideMenu("account-login");
    showFlexMenu("start-menu")
}

function hideMenu(id){
    document.getElementById(id).style.display="none"
}

function showFlexMenu(id){
    document.getElementById(id).style.display="flex"
}