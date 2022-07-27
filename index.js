function seterror(id, error) {
    element = document.getElementById(id);
    element.innerHTML = error;
    if (id == "usererror" && error != "") {
        document.getElementById("username").style.border = "2px solid red";
    } else if (id == "usererror" && error == "") {
        document.getElementById("username").style.border = "2px solid black";
    }
    if (id == "passerror" && error != "") {
        document.getElementById("password").style.border = "2px solid red";
    } else if (id == "passerror" && error == "") {
        document.getElementById("password").style.border = "2px solid black";
    }

}

function validateForm() {
    var returnval = true;
    var user = document.forms["loginForm"]["username"].value;
    var pass = document.forms["loginForm"]["password"].value;
    if (user.length == 0) {
        seterror("usererror", "*Required");
        returnval = false;
    } else if (user.length < 6) {
        seterror("usererror", "*Username is too short");
        returnval = false;
    } else if (user.length > 12) {
        seterror("usererror", "*Username is too long");
        returnval = false;
    } else {
        seterror("usererror", "");
    }

    if (pass.length == 0) {
        seterror("passerror", "*Required");
        returnval = false;
    } else if (pass.length < 8) {
        seterror("passerror", "*Password is too short");
        returnval = false;
    } else if (pass.length > 16) {
        seterror("passerror", "*Password is too long");
        returnval = false;
    } else {
        seterror("passerror", "");
    }
    if (returnval == true) {
        localStorage.setItem("auth", 1);
    }
    return returnval;
}