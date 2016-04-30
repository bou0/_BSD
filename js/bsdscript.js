(function($) { 
	"use strict";
	
(function($) {
$(function() {
jQuery('#loopedSlider').prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");
	jQuery('#loopedSlider').loopedSlider({
		autoHeight: 500
	});
});
});

// for banner height js
var windowWidth = $(window).width();
    var windowHeight =$(window).height();
    $('.banner').css({'width':windowWidth ,'height':windowHeight -"60" });

}(jQuery));
