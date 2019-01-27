$(document).ready(function () {
    $(".click").click(function () {
        $(".container").fadeIn(500);
        $("#shadow").fadeIn(500);
    });

    $(".close, #shadow").click(function () {
        $(".container").fadeOut(500);
        $("#shadow").fadeOut(500);

    });


})