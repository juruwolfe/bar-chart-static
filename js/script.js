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
		var barHtml = '<div class="bar" style="width:'+data[i].temp+'%"></div>';

		barchartHTML += '<div class="barchart-row">'+labelHtml+barHtml+'</div>';
	};

	$(".chart-wrapper").html(barchartHTML);

});