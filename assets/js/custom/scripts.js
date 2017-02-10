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
