import { getUserData } from "./api-requests.js";

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

export async function gotoTransactionsPage(user){
    loadingScreen(true, "Loading Transaction History");
    let currentUserData = await getUserData(user);
    for(let transaction of currentUserData.transactions){
        createTableRow(transaction)
    }
    document.getElementById("account-header").innerText = user;
    document.getElementById("description-display").innerText = `This account is for ${currentUserData.description}. The current balance is ${currentUserData.currency}${currentUserData.balance}.`
    hideMenu("account-login");
    hideMenu("account-creation");
    showFlexMenu("transactions-page")
    loadingScreen(false, "");
    return;
}

export function gotoNewTransactionsPage(){
    hideMenu("transactions-page");
    showFlexMenu("new-transactions-page");
}

export function loadingScreen(loading, reason){
    document.getElementById("loading-text").innerText = reason;
    if(loading){
        showFlexMenu("loading-screen");
        console.log("loading screen triggered")
        return;
    }
    else {
        hideMenu("loading-screen");
        console.log("loading screen removed")
        return;
    }
}

function hideMenu(id){
    document.getElementById(id).style.display="none"
}

function showFlexMenu(id){
    document.getElementById(id).style.display="flex"
}

function createTableRow(transactionObject){
    let date = transactionObject.date;
    date = date.split("T")[0];
    let newRow = document.createElement("tr")
    let rowHTML = `
    <td>${date}</td>
    <td>${transactionObject.object}</td>
    <td>${transactionObject.amount}</td>`;
    newRow.innerHTML = rowHTML;
    document.getElementById("transactions-table").append(newRow);
    return;
}