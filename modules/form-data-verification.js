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