$(document).ready(function($) {
	
	var data = [
		{
			"month":"Jan.",
			"temp":39,
			"sunshine":154
		},
		{
			"month":"Feb.",
			"temp":42,
			"sunshine":171
		},
		{
			"month":"March",
			"temp":50,
			"sunshine":213
		},
		{
			"month":"April",
			"temp":60,
			"sunshine":237
		},
		{
			"month":"May",
			"temp":71,
			"sunshine":268
		}
	]

	var barchartHTML = '';
	
	for (var i = 0; i < data.length; i++) {
		var labelHtml = '<span class="label">'+data[i].month+'</span>';

		var dataTemp = 'data-temp="'+data[i].temp+'"';
		var dataSunshine = 'data-sunshine="'+(data[i].sunshine/4)+'"';
		var barHtml = '<div class="bar" ' + dataTemp + dataSunshine + '></div>';

		barchartHTML += '<div class="barchart-row">'+labelHtml+barHtml+'</div>';
	};

	$(".chart-wrapper").html(barchartHTML);

	setTimeout(function(){
		// Start a new jQuery loop through every element on the page with a class of bar. The function we'll pass as an arugment, thanks to jQuery, comes with two arguement. The first (I've called in 'index' here) tells us what number the element is on the page. The second lets us select the element itself, so I'm calling it 'element'
		$(".bar").each(function(index, element) {
			// Select the element and get it's data-width attribute, that we created and set in the for loop. Assign that to a variable called 'width'
			let width = $(element).attr('data-temp');
			let indexReal = index + 1;
			// For each element, animate it's width propery to be equal to the width we just grabbed (plus a percent sign). Take one second to do so
			$(element).animate({
				'width':width+"%"
			}, 200 * indexReal)
		});
	},250)
	

	$(".button").click(function(event) {
		var btnId = $(this).attr('id');
		$(".bar").each(function(index, element) {
				// Select the element and get it's data-width attribute, that we created and set in the for loop. Assign that to a variable called 'width'
				let width = $(element).attr('data-'+btnId);
				let indexReal = index + 1;
				// For each element, animate it's width propery to be equal to the width we just grabbed (plus a percent sign). Take one second to do so
				$(element).animate({
					'width':width+"%"
				}, 100  * indexReal)
			});
	});

});