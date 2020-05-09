$(document).ready(function() {

    // animate
    $(".swap").click(function(){
        $(".container").toggleClass("sign-up");
    });

    $(window).load(function() {
        $("body").removeClass("preload");
    });

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
    $("form").submit(function(){
        if ( $(this).hasClass("login") ) {
            alert("login!");
        } else {
            alert("register!");
        }
        event.preventDefault();
    });

});