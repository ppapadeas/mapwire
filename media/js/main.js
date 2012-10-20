//$(document).ready(function() {
    //$('#loading').hide();
//});

$(document).ajaxStart(function() {
    $("#loading").toggle();
}).ajaxStop( function() {
    $("#loading").toggle();
});


$(document).ready(function() {
    $("#loading").toggle();

    $("a#myloc").click(function() {
        myloc();
    });

    $("input#query").keypress(function(e) {
        if (e.which == 13) {
            $("a#searchbutton").click();
        }
    });

    $("a#searchbutton").click(function() {
        var query = $("input#query").val();
        $("#searchresults").load("/search/"+query+"/");
    });

    $("a#meta_button").click(function() {
        $("main").slideToggle();
    });
});
