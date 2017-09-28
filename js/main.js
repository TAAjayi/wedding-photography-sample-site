$(document).ready(function() {
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 300,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
});

$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        duration: 500,
        shift: 20
    });
});

$(document).ready(function() {
    $('.materialboxed').materialbox();
});

$(document).ready(function() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
});