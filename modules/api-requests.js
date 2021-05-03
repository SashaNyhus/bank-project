const API_URL = new URL("http://localhost:5000/api/");

export async function postNewUser(){
    let newAccountData = document.getElementById("account-creation-form");
    newAccountData = convertFormToJSON(newAccountData);
    await postRequest("accounts", newAccountData)
    .then(() => (console.log("successfully created new account")))
    .catch(err => (console.log("problem creating new account: " + err)))
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
