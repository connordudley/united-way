(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
// function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
// e=o.createElement(i);r=o.getElementsByTagName(i)[0];
// e.src='//www.google-analytics.com/analytics.js';
// r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
// ga('create','UA-XXXXX-X','auto');ga('send','pageview');

jQuery(document).ready(function($) {
function checkVisibility() {
	var optIn = $('#optIn').is(':checked');
	var eventInfo = $('#eventInfo').is(':checked');

	$('#optOut').change(function(){
		$('#emailOptionsTwo').find('input[type=checkbox]:checked').removeAttr('checked');
	});

	$('.subOption').change(function(){
		$('#unSubbed').find('input[type=checkbox]:checked').removeAttr('checked');
	})
}

$('input[type="checkbox"]').on( 'change', function() {
	checkVisibility();
} );

checkVisibility();

/**
 * Modal Show/Hide
 */
function hideModal() {
	$('.modal').removeClass('show');
}

$('.modal-show').on( 'click', function(e) {
	e.preventDefault();
	var modal = $(this).attr('href');
	$(modal).addClass('show');
});

$('.close').click( function() {
	hideModal();
});

$(document).keyup( function(e) {
	if (e.keyCode == 27) { // escape key maps to keycode `27`
		hideModal();
	}
});

});