//$(document).ready(function() {
    //$('#loading').hide();
//});

$(document).ajaxStart(function() {
    $("#loading").toggle();
}).ajaxStop( function() {
    $("#loading").toggle();
});


$(document).ready(function() {
    $("#search_hud").hide();
    $("#forsharemodal").reveal();
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
        $("#search_hud").show('fast');
    });

    $("a#meta_button").click(function() {
        $("main").slideToggle();
    });

    $("#search_hud_close").click(function(){
        $("#search_hud").hide('fast');
        marker
    });
});
