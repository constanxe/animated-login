$(document).ready(function() {

    // // center div for mobile
    // var chg = function() {
    //     var w = screen.width;
    //     if (w <= 700) {
    //         var left = (w-337)/2 -337*2
    //         $(".container").css("left", left);
    //     }

    //     // var h = screen.height;
    //     // if (w <= 700) {
    //     //     var top = (h-337)/2 -337*2
    //     //     $(".container").css("left", left);
    //     // }
    // };
    // $(chg);
    // $( window ).resize(chg);

    // animate
    $(".swap").click(function(){
        $(".container").toggleClass("sign-up");
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