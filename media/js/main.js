$(document).ready(function() {
    //$('#loading').hide();
});

$(document).ajaxStart(function() {
    //$('#loading').toggle();
    alert('yoohoo');
}).ajaxStop( function() {
    $('#loading').toggle();
});


$(document).ready(function() {
    $('#loading').toggle();
	
    $("a#myloc").click(function() {
        myloc();
    });
});
