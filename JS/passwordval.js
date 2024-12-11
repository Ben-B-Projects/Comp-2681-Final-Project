/*
    Author: Ben Boates
    Date:   2023-05-07

    Filename: passwordval.js
Example password validator that would ideally be used for signing up to Geometa's website.
The sign in page currently just checks that your email 
and password are valid for submission, then sends you back to the homepage. 
*/

const signIn = document.getElementById("signIn");
const signInAttempt = document.getElementById("signInAttempt");
const attemptSignIn = document.getElementById("submit");

const attempt = document.createElement("p");
attemptSignIn.addEventListener("click", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;
    const lengthRegex = /.{8,}/;

    const containsCharacters = email.length >= 1;
    const isUpperCase = uppercaseRegex.test(password);
    const isLowerCase = lowercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const isLengthValid = lengthRegex.test(password);
    
    const isValid = isUpperCase && isLowerCase && hasNumber && isLengthValid && containsCharacters;
    var output = "";

    if (isValid) {
        output = "Sign in credentials valid.";
        alert("Email and Password fit the requirements.");
    }



    if (!containsCharacters) {
        output += "Fill in the email text box. ";
    }

    if (!isUpperCase || !isLowerCase || !hasNumber || !isLengthValid) {
        output += "Your password requires: ";
    }
    if (!isUpperCase) {
        output += "An upper case. ";
    }

    if (!isLowerCase) {
        output += "A lower case. ";
    }

    if (!hasNumber) {
        output += "A number. ";
    }

    if (!isLengthValid) {
        output += "More characters.";
    }
    
    var formattedOutput = `
    <div>
        <p>${output}</p>
    </div>
    `;

    

    var testString = "TEST WORDS OF SADNESS";

    signInAttempt.innerHTML = formattedOutput;
    signInElement.appendChild(signInAttempt);

});