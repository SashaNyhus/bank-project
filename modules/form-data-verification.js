export function formHasBadInput(formID){
    let badInput = false;
    let formElements = document.getElementById(formID).children;
    for (let element of formElements){
        if(element.classList.contains("bad-input")){
            badInput = true;
        }
    }
    return badInput;
}

export function checkNewAccountName(){
    let badInput = false;
    let inputErrors = [];
    let field = document.getElementById("new-account-name")
    let input = field.value;
    if (input === ""){
        badInput = true;
        inputErrors.push("User name cannot be blank.")
    }
    if((input.length < 8) && (input.length > 0)){
        badInput = true;
        inputErrors.push("User name must be at least 8 characters long.");
    }
    if(containsNoSpecialCharacters(input) === false){
        badInput = true;
        inputErrors.push("User name can only contain letters and numbers.")
    }
    if(badInput){
        displayInputErrors(field, "new-account-name-error", inputErrors);
        return;
    }
    else {
        hideInputErrors(field, "new-account-name-error");
        return;
    }
}

export function checkNewAccountDescription(){
    let badInput = false;
    let inputErrors = [];
    let field = document.getElementById("new-account-description")
    let input = field.value;
    if (input === ""){
        badInput = true;
        inputErrors.push("Description cannot be blank.")
    }
    if(badInput){
        displayInputErrors(field, "new-account-description-error", inputErrors);
        return;
    }
    else {
        hideInputErrors(field, "new-account-description-error");
        return;
    }
}

export function checkNewAccountBalance(){
    let badInput = false;
    let inputErrors = [];
    let field = document.getElementById("new-account-balance")
    let input = field.value;
    if (input === ""){
        badInput = true;
        inputErrors.push("Account balance cannot be blank.")
    }
    if(isNaN(input)){
        badInput = true;
        inputErrors.push("Account balance must be a number.")
    }
    if(input < 50){
        badInput = true;
        inputErrors.push("Starting balance must be at least 50")
    }
    if(badInput){
        displayInputErrors(field, "new-account-balance-error", inputErrors);
        return;
    }
    else {
        hideInputErrors(field, "new-account-balance-error");
        return;
    }
}

function displayInputErrors(element, displayAreaID, errorArray){
    element.classList.add("bad-input");
    document.getElementById(displayAreaID).innerText = errorArray.join(" ");
}

function hideInputErrors(element, displayAreaID){
    element.classList.remove("bad-input");
    document.getElementById(displayAreaID).innerText = "";
}

function containsNoSpecialCharacters(string){
    let regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    return !(regex.test(string));
}