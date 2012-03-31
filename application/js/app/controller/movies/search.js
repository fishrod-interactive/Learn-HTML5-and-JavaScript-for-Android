var app = app || {};

app.controller = app.controller || {};
app.controller.movies = app.controller.movies || {};

app.controller.movies.search = function(searchfield){
	
	var searchfield = document.querySelector(searchfield),
		_self = this;
		
	/**
	 * Bind keyup event to search field
	 */
	searchfield.addEventListener('keyup', function(){
		_self.find(this.value);
	});
		
	this.find = function(query){
			
		if(query.length > 3){
			
			/**
			 * Make a JSONP request, this will load a script with the location specified
			 * Cross site AJAX relies on the server producing Access-Control-Allow-Origin
			 * headers, not all web applications produce this unfortunatly, but most of
			 * them support a method known as JSONP (JSON with padding).
			 */
			
			// var src = "http://api.themoviedb.org/2.1/Movie.search/en/json/bbe8939bdc4d7d35197a12af12b258d8/" + query;
			var src = "http://api.themoviedb.org/3/search/movie?callback=app.bootstrap.getController('movies.search').showResults&api_key=0bd115e829f1c55f49024251d6b71021c23087a4&query=" + query;
			
			/**
			 * Create a new script tag
			 */
			var script = document.createElement('script');
			
			/**
			 * Set the source of the script element to be the same as the on specified above
			 */
			script.src = src;
			script.async = "async";
						
			script.onreadystatechange = function(){
				console.log(arguments);
			}
			
			/**
			 * Embed the script
			 */
			document.head.appendChild(script);
		}
		
	}
	
	this.showResults = function(results){
		console.log(results);
	}
	
}
