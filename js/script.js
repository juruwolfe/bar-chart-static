$(document).ready(function($) {
	
	var data = [
		{
			"month":"Jan.",
			"temp":36
		},
		{
			"month":"Feb.",
			"temp":36
		},
		{
			"month":"March",
			"temp":39
		},
		{
			"month":"April",
			"temp":52
		},
		{
			"month":"May",
			"temp":61
		},
		{
			"month":"June",
			"temp":72
		},
		{
			"month":"July",
			"temp":77
		},
		{
			"month":"Aug.",
			"temp":75
		},
		{
			"month":"Sept.",
			"temp":68
		},
		{
			"month":"Oct.",
			"temp":57
		},
		{
			"month":"Nov.",
			"temp":48
		},
		{
			"month":"Dec.",
			"temp":48
		}
	]

	var barchartHTML = '';
	
	for (var i = 0; i < data.length; i++) {
		var labelHtml = '<span class="label">'+data[i].month+'</span>';
		var barHtml = '<div class="bar" data-width="'+data[i].temp+'"></div>';

		barchartHTML += '<div class="barchart-row">'+labelHtml+barHtml+'</div>';
	};

	$(".chart-wrapper").html(barchartHTML);

	// Start a new jQuery loop through every element on the page with a class of bar. The function we'll pass as an arugment, thanks to jQuery, comes with two arguement. The first (I've called in 'index' here) tells us what number the element is on the page. The second lets us select the element itself, so I'm calling it 'element'
	$(".bar").each(function(index, element) {
		// Select the element and get it's data-width attribute, that we created and set in the for loop. Assign that to a variable called 'width'
		let width = $(element).attr('data-width');

		// For each element, animate it's width propery to be equal to the width we just grabbed (plus a percent sign). Take one second to do so
		$(element).animate({
			'width':width+"%"
		}, 1000)
	});

});