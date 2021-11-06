function errorMessages() {
    
    var name = document.getElementById('username');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var email = document.getElementById('email');
    var regExpression =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[(/*-+!@#$^&*)]).{8,}/;
    var error = document.getElementById("error");

        if ((name.value.length) < 3){
            // Changing content and color of error div
            error.textContent = "Username must be at least 3 characters"
            error.style.color = "red"
            return false;
        } else if((password.value.length) < 8){
            error.textContent = "Password must be greater than 7 characters"
            error.style.color = "red"
            return false;
        } else if(!/^[a-zA-Z]/.test(name.value)){
            error.textContent = "Username must start with letter";
            error.style.color = "red"
            return false;
        } else if(!(regExpression.test(password.value)) ){
            error.textContent = "Password must contain one digit, one uppercase, and one of the following: (/*-+!@#$^&*)";
            error.style.color = "red"
            return false;
        } else if(email.value === ""){
            error.textContent = "Enter an Email";
            error.style.color = "red";
            return false;
        } else if ((confirmPassword === "") || (password.value != confirmPassword.value)){
            error.textContent = "Passwords must match";
            error.style.color = "red";
            console.log("hiii");
            return false;
        }
        
        
}

