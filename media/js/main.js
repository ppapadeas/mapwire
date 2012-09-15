$(document).ajaxStart(function() {
    $('#loading').toggle();
}).ajaxStop( function() {
    $('#loading').toggle();
});
