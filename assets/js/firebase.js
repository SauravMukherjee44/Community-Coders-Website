const firebaseConfig = {
    apiKey: "AIzaSyAmBsxAf28DfEpkw0thtnzsocuxyA1WmgM",
    authDomain: "community-coders-website.firebaseapp.com",
    databaseURL: "https://community-coders-website-default-rtdb.firebaseio.com",
    projectId: "community-coders-website",
    storageBucket: "community-coders-website.appspot.com",
    messagingSenderId: "876853305565",
    appId: "1:876853305565:web:271d7ec151379bc9cd7b34",
    measurementId: "G-7LVV8KZVC7"
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");
var subscribeFormDB = firebase.database().ref("subscribeForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);
document.getElementById("subscribeForm").addEventListener("submit", subscribe);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("inputName");
    var email = getElementVal("inputEmail");
    var subject = getElementVal("subj");
    var message = getElementVal("msg");

    saveMessages(name, email, subject, message);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}


function subscribe(e) {
    e.preventDefault();
    let subEmail = getElementVal("subEmail");
    var newsubscibeForm = subscribeFormDB.push();

    newsubscibeForm.set({
        subEmail
    });
    
    //   enable alert
    document.querySelector(".subscribeAlert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".subscribeAlert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("subscribeForm").reset();
}


const getElementVal = (id) => {
    return document.getElementById(id).value;
};


const saveMessages = (name, email, subject, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name, email, subject, message
    });
};