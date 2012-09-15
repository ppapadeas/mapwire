$(document).ready(function() {
    //$('#loading').hide();
});

$(document).ajaxStart(function() {
    $('#loading').toggle();
}).ajaxStop( function() {
    $('#loading').toggle();
});
