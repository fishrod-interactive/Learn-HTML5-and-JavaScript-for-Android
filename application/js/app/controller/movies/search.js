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
			

			
			// var src = "http://api.themoviedb.org/3/search/movie?api_key=bbe8939bdc4d7d35197a12af12b258d8&query=" + query;
			var src = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=57t3sa6sp5zz5394btptp9ew&q=' + query + '&callback=app.bootstrap.getController("movies.search").showResults';
			
			/**
			 * Create a new script tag
			 */
			var script = document.createElement('script');
			
			/**
			 * Set the source of the script element to be the same as the on specified above
			 */
			script.src = src;
			script.async = "async";
						
			script.onload = script.onreadystatechange = function(){
				console.log(arguments);
			}
			
			/**
			 * Embed the script
			 */
			document.head.appendChild(script);
		}
		
	}
	
	this.showResults = function(rtresults){
		
		/**
		 * This is the rotten tomatoes API data.
		 * The code below will process the data
		 * returned and convert them to models
		 * that the application will understand
		 * you could wrap these API calls into
		 * a separate library, but for now having
		 * them in the controller will suffice
		 */
		
		// First create an empty array to hold the results
		var results = [];
		
		// Next loop through the results from rotten tomatoes
		for(var i = 0; i < rtresults.movies.length; i++){
			var rtmovie = rtresults.movies[i];
			// For every result you create a new movie object
			var title = rtmovie.title || '', imdbref = (typeof rtmovie.alternate_ids === 'undefined') ? '' : rtmovie.alternate_ids.imdb, posterframe = rtmovie.posters.original || '', synopsis = rtmovie.synopsis || '';
			results.push(new app.model.movie(title, imdbref, posterframe, synopsis));
		}
		
		// Create the view using the data
		var view = new app.view.searchresults(results);
		
		console.log(view);
		
	}
	
}
