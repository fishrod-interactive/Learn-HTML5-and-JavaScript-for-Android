var app = app || {};

app.controller = app.controller || {};

app.controller.movies = function(){
	
	this.add = function (movie){
				
	}
	
	this.initSearch = function (){
		
		var element = document.querySelector('#add-movie input[name="query"]');
		element.addEventListener('keyup', function(){
			console.log(this.value);
		});
		
	}
	
	this.view = function (id) {
		
	}
	
	this.initSearch();
	
};