// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll>10) {
    	$("#navbar").css("border-bottom", "1px solid #999")
	} else {
    		$("#navbar").css("border-bottom", "0px")
	};
});