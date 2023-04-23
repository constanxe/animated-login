document.addEventListener("DOMContentLoaded", function() {

    // add password matching validation
    // https://codepen.io/diegoleme/pen/surIK
    var password = document.getElementById("Password")
    , confirm_password = document.getElementById("ConfirmPassword");
    function validatePassword(){
        if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("password does not match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    // alert
    document.querySelectorAll("form").forEach(function(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();       
            if (this.classList.contains("login") ) {
                alert("login!");
            } else {
                alert("register!");
            }
        })
    });
    
});
