
import {gotoAccountCreation, gotoAccountLogin, exitAccountCreation, exitAccountLogin} from "./menu-buttons.js";
import {postNewUser} from "./api-requests.js"

//start-menu event listeners
document.getElementById("goto-account-creation").addEventListener("click", gotoAccountCreation);
document.getElementById("goto-account-login").addEventListener("click", gotoAccountLogin);

//account-creation event listeners
document.getElementById("account-creation-exit").addEventListener("click", exitAccountCreation);

//login event listeners
document.getElementById("exit-account-login").addEventListener("click", exitAccountLogin)

//submit functions
async function createNewUser(){
    postNewUser();
}

window.createNewUser = createNewUser