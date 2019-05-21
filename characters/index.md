---
layout: default
title: Charaktere
--- 
<div class="container">
	<div class="card-column row">
		{% for character in site.data.characters %}
		<div class="card m-3 shadow border" style="max-width: 500px">
		  <div class="row no-gutters">
		    <div class="col-md-4">
		      <img src="{{ site.baseurl }}{{ character.pic }}" class="card-img" alt="{{ character.name }} Charakter Bild">
		    </div>
		    <div class="col-md-8">
		      <div class="card-body">
		        <h5 class="card-title comic-font">{{ character.name }}</h5>
		        <p class="card-text">{{ character.bio }}</p>
		      </div>
		    </div>
		  </div>
		</div>
		{% endfor %}
    </div>
</div>