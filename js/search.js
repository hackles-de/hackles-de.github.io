---
layout: null
---

jQuery(function() {
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 50 });
    this.field('content', { boost: 10 });
    this.field('categories');
  });

  // Get the generated search_data.json file so lunr.js can search it locally.
  window.data = $.getJSON('{{ site.baseurl }}/search_data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      	window.idx.add($.extend({ "id": index }, value));
    });
  });
  

  // Event when the form is submitted
  $("#site_search").submit(function(event){
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      var results = idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  function display_search_results(results) {
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
        var item = loaded_data[result.ref];
		  
          // Build a snippet of HTML for this result
		
	    var appendString = '<a href="' + item.url + '" class="custom-card">';
		appendString += '<div class="card m-3 shadow border" style="width: 500px">';
		appendString += '<div class="row no-gutters">';
	    appendString += '<div class="col-md-4">';
		appendString += '<img src="' + item.thumbnail + '" class="card-img">';
	    appendString += '</div>';
	    appendString += '<div class="col-md-8">';
	    appendString += '  <div class="card-body">';
	    appendString += '    <h5 class="card-title">' + item.title + '</h5>';
	    appendString += '    <p class="card-text">Folge ' + item.my_index + '<br />';
		appendString += '	<small class="text-muted">Veröffentlicht: ' + item.publish_date + '</small><br />';
		appendString += '	<small class="text-muted">Such-Score: ' + (result.score * 100).toFixed(3) + '</small></p>';
	    appendString += '  </div>';
	    appendString += '</div>';
		appendString += '</div>';
	    appendString += '</div>';
		appendString += '</a>';
		
         // var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';

          // Add the snippet to the collection of results.
          $search_results.append(appendString);
        });
      } else {
		  var noResultString = '<div class="col-lg-8 mt-4">';
		  noResultString += 'Kein Suchergebnis gefunden!'
		  noResultString += '</div>';
		  
		  
        // If there are no results, let the user know.
        $search_results.html(noResultString);
      }
    });
  }
});
