document.addEventListener("DOMContentLoaded", function () {
    // animate
    document.querySelectorAll(".swap").forEach(function (swap) {
        swap.addEventListener("click", function () {
            document.querySelector(".container").classList.toggle("sign-up");
        });
    });
});