let areValidCredentials = true;
let personName = "Vasya";
let nameExists = false;

function sendEmail() {
    return new Promise(function (resolve, reject) {
        if (areValidCredentials) {
            setTimeout(() => resolve(signIn()), 1000);
        }
        else {
            reject(new Error("Sign in proccess failed"));
        }
    }).then(() => {
        return new Promise(function (resolve, reject) {
            if (nameExists) resolve(choosePerson());
            else reject(new Error("The name doesn't exist"));
        })
    }).then(() => {
        return Promise.resolve(subjectOfEmail());
    }).then(() => {
        return Promise.resolve(writeEmail());
    }).then(() => {
        return Promise.resolve(confirmSendingEmail());
    }).catch((reason) => {
        console.log(reason.message);
        console.log("Sending email was failed");
    })
};

sendEmail();

function signIn() {
    console.log("You successfully signed in");
}

function choosePerson() {
    console.log("You chose a person - " + personName);
}

function subjectOfEmail() {
    console.log("You wrote subject of email");
}

function writeEmail() {
    console.log("You wrote an email");
}

function confirmSendingEmail() {
    console.log("You sent the email");
}