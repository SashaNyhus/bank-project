
import {gotoAccountCreation, gotoAccountLogin, exitAccountCreation, exitAccountLogin, gotoTransactionsPage, gotoNewTransactionsPage, loadingScreen} from "./menu-buttons.js";
import {formHasBadInput, checkNewAccountName, checkNewAccountDescription, checkNewAccountBalance} from "./form-data-verification.js"
import {postNewUser, postNewTransaction} from "./api-requests.js"


//start-menu event listeners
document.getElementById("goto-account-creation").addEventListener("click", gotoAccountCreation);
document.getElementById("goto-account-login").addEventListener("click", gotoAccountLogin);

//account-creation event listeners
document.getElementById("new-account-name").addEventListener("blur", checkNewAccountName);
document.getElementById("new-account-description").addEventListener("blur", checkNewAccountDescription);
document.getElementById("new-account-balance").addEventListener("blur", checkNewAccountBalance);
document.getElementById("account-creation-exit").addEventListener("click", exitAccountCreation);

//login event listeners
document.getElementById("account-login-submit").addEventListener("click", loginExistingAccount);
document.getElementById("exit-account-login").addEventListener("click", exitAccountLogin);

//transactions listeners
document.getElementById("goto-new-transactions-page").addEventListener("click", gotoNewTransactionsPage)

//submit functions
async function createNewUser(){
    event.preventDefault();
    if(formHasBadInput("account-creation-form")){
        displayNewAccountCreationError("You must fill all fields correctly.")
        return;
    }
    let newUserName = document.getElementById("new-account-name").value;
    loadingScreen(true, "Creating new account")
    let response = await postNewUser();
    loadingScreen(false, "");
    if(response === 201){
        gotoTransactionsPage(newUserName);
    }
    else if(response === 409){
        displayNewAccountCreationError(`An account for ${newUserName} already exists. Please enter a different user name, or return to the main menu to log in.`)
    }
    else {
        displayNewAccountCreationError("An unknown error occurred. See the console for more details.")
    }
}
async function loginExistingAccount(){
    let userName = document.getElementById("account-login-name").value;
    await gotoTransactionsPage(userName);
    return;
}
function displayNewAccountCreationError(errorText){
    document.getElementById("new-account-creation-error").innerText = errorText;
    return;
 }

async function logNewTransaction(){
    let currentUser = document.getElementById("account-header").innerText
    event.preventDefault();
    if(formHasBadInput("transaction-entry-form")){
        return;
    }
    loadingScreen(true, "Logging transaction");
    await postNewTransaction();
    gotoTransactionsPage(currentUser);
    return;
}

window.createNewUser = createNewUser;
window.logNewTransaction = logNewTransaction;