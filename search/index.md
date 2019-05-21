---
layout: default
title: Suche
--- 
	
<div class="container">
	<form action="get" id="site_search">
	   <div class="row justify-content-md-center">
	  	 <div class="col-lg-5">
		    <input id="search_box" name="textinput" type="text" placeholder="Suchtext" class="form-control input-md">
	     </div>
	     <div class="col-lg-1">
		    <button id="singlebutton" name="singlebutton" class="btn btn-secondary">Los</button>
	     </div>
	   </div>
	</form>
  	<div class="row justify-content-md-center" id="search_results">		
	</div>
</div>
<script src="{{ site.baseurl }}/js/jquery-3.1.0.min.js"></script>
<script src="{{ site.baseurl }}/js/lunr.min.js"></script>
<script src="{{ site.baseurl }}/js/search.min.js"></script>