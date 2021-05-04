const API_URL = new URL("http://localhost:5000/api/");

export async function postNewUser(){
    let newAccountData = document.getElementById("account-creation-form");
    newAccountData = convertFormToJSON(newAccountData);
    let res = await postRequest("accounts", newAccountData);
    if(res.status === 201){
        console.log("Account successfully created");
    }
    else if(res.status === 409){
        console.log("Error - account with that name already exists")
    }
    else {
        console.log("An error occured in account creation: " + res.status + " : " + res.statusText)
    }
    return res.status;
}

export async function getUserData(user){
    console.log(typeof(user))
    let userData = await getRequest(`accounts/${user}`)
    userData = await userData.json();
    console.log(userData);
    return userData;
}

//in progress
export async function postNewTransaction(){
    let currentAccount = document.getElementById("account-header").innerText
    let newTransactionData = document.getElementById("transaction-entry-form");
    newTransactionData = convertFormToJSON(newTransactionData);
    let requestEndpoint = "accounts/" + currentAccount + "/transactions";
    console.log(requestEndpoint)
    let res = await postRequest(requestEndpoint, newTransactionData);
    if(res.status === 201){
        console.log("success");
    }
    else {
        console.log("An error occured: " + res.status + " : " + res.statusText)
    }
    return res.status;
}

function convertFormToJSON(form){
    let formData = new FormData(form);
    let objectData = Object.fromEntries(formData);
    let jsonData = JSON.stringify(objectData);
    return jsonData;
}

async function postRequest(endpoint, body){
    let url = new URL(endpoint, API_URL);
    console.log(body)
    console.log(url)
    let response = await fetch(url, {
        "method": "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: body
    });
    console.log(response);
    return response;
}

async function getRequest(endpoint){
    let url = new URL(endpoint, API_URL);
    console.log(url)
    let fetchedData = await fetch(url, {
        "method": "GET",
        headers: { 
            "Content-Type": "application/json"
        },
    })
    return fetchedData;
}
