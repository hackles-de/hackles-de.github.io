---
layout: default
title: Archiv
--- 
<div class="container">
	<div class="row justify-content-md-center">
	{% for post in site.categories.cartoon %}
	<a href="{{ post.url }}" class="custom-card">
	<div class="card m-3 shadow border" style="width: 500px">
	  <div class="row no-gutters">
	    <div class="col-md-4">
	      <img src="{{ site.baseurl }}/images/cartoon/thumbs/{{ post.image }}" class="card-img">
	    </div>
	    <div class="col-md-8">
	      <div class="card-body">
	        <h5 class="card-title">{{ post.germantitle }}</h5>
	        <p class="card-text">Folge {{ post.my_index }}<br />
			<small class="text-muted">Veröffentlicht: {{ post.date | date: "%d.%m.%Y" }}</small></p>
	      </div>
	    </div>
	  </div>
	</div>
	</a>
	{% endfor %}
    </div>
</div>