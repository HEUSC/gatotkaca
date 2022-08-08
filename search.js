$( document ).ready(function() {
    $("#search" ).submit(function( event ) {
		event.preventDefault();
		var query = $("#query").val();
		$.get("https://api.gatotka.ca/?query=" + query + "&page=1", function( data ) {
			js = JSON.parse(JSON.stringify(data));
			$.each( js['results'], function(index, value) {
			  var dap = '<span class="text-primary"><a href="' + value['url'] + '" target="_blank">' + value['breadcumb'] + '</a></span><h5 class="mb-1">' + value['title'] + '</h5><span class="text-success">' + value['content'].substr(0,78) + '...</span><br><br>';
			  $("#sresult" ).append(dap);
			});
		});
	});
});