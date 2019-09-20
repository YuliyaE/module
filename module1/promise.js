function sendEmail(){return new Promise(function (resolve) {
    setTimeout(() => resolve(signIn()), 1000);
}).then(() =>{
    return choosePerson();
}).then(() =>{
    return subjectOfEmail();
}).then(() => {
    return writeEmail();
}).then(() => {
    return confirmSendingEmail();
}).catch(() => {
    console.log("Sending email was failed");
})
};

sendEmail();

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

function confirmSendingEmail() {
    console.log("You have sent the email");
}

