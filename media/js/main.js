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

    $("a#full").click(function() {
        togglefull();
    });

    $("input#query").keypress(function(e) {
        if (e.which == 13) {
            $("a#search_button").click();
        }
    });

    $("a#search_button").click(function() {
        var query = $("input#query").val();
        $("#search_results").load("/search/"+query+"/");
    });

    $("a#search_point").click(function(e) {
        var query = e.attr("value");
        point(query);
    });

    $("a#meta_button").click(function() {
        $("main").slideToggle();
    });
});
