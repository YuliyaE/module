let promise = new Promise(function (resolve) {
    setTimeout(() => resolve(signIn()), 1000);
}).then(() =>{
    return choosePerson();
}).then(() =>{
    return subjectOfEmail();
}).then(() => {
    return writeEmail();
}).then(() => {
    return sendEmail();
}).catch(() => {
    console.log("Sending email was failed");
})

function signIn() {
    console.log("You jave successfully signed in");
}

function choosePerson() {
    console.log("You have chosen a person");
}

function subjectOfEmail() {
    console.log("You have written subject of email");
}

function writeEmail() {
    console.log("You have written an email");
}

function sendEmail() {
    console.log("You have sent the email");
}

