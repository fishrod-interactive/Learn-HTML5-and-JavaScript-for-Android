var app = app || {};

app.controller = app.controller || {};

app.controller.movies = function(){
	
	var _self = this,
		_searchfield = document.querySelector('#add-movie input[name="query"]'),
		_searchresultscard = document.getElementById('card-movie_search_results'),
		_searchTimeout;
	
	/**
	 * This contains all initialization code
	 */
	this.bindSearchForm = function(){
		
		/**
		 * Here you add an event listener to the search fied using
		 * the textInput event listener
		 */
		
		_searchfield.addEventListener('focus', function(){
			if(this.value.length > 0){
				app.utility.deck.showCard('card-movie_search_results');
			}
		});
	
		_searchfield.addEventListener('input', function(){
			
			/**
			 * This is the value of the input field
			 */
			var value = this.value;
			
			/**
			 * This will clear the search timeout
			 */
			clearTimeout(_searchTimeout);
			
			/**
			 * You don't want to run search straight after every key press
			 * this will set a timeout of 1 second (1000 ms) before the
			 * search function is called
			 */
			
			if(value.length > 0){
				document.getElementById('taskbar').classList.add('searchactive');
			} else {
				document.getElementById('taskbar').classList.remove('searchactive');
			}
			
			_searchTimeout = setTimeout(function(){
				_self.search(value);
			}, 1000); 
		});
		
	}
	
	this.clearSearch = function(){
		_searchfield.value = '';
		app.utility.deck.hideCard('card-movie_search_results');
		
		evt = document.createEvent('HTMLEvents');
		evt.initEvent('input', true, false);
		_searchfield.dispatchEvent(evt);
	}
	
	this.find = function(data){

		if(typeof data.id === 'undefined'){
			throw "No ID supplied to find action in view controller";
			return;
		}
		
		var jsonp = new app.utility.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + data.id + '.json?apikey=57t3sa6sp5zz5394btptp9ew', 'app.bootstrap.getController("movies").view');
		jsonp.send();
	}
	
	this.view = function(rtresult){
		
		if(typeof rtresult !== 'object'){
			return;
		}
		
		var movie = new app.model.movie(rtresult.title, rtresult.id, rtresult.posters.original, rtresult.synopsis),
			viewcard = document.getElementById('card-movie_info');
		
		/**
		 * The Rotten Tomatoes API sometimes doesn't return an IMDB
		 * reference, so check to see whether it exists first
		 */
		if(rtresult.alternate_ids && rtresult.alternate_ids.imdb){
			movie.setIMDBRef(rtresult.alternate_ids.imdb);
		}
		
		/**
		 * Set the DVD and cinema release dates
		 */
		movie.setCinemaReleaseDate(new Date(rtresult.release_dates.theater));
		movie.setDVDReleaseDate(new Date(rtresult.release_dates.dvd));
		
		/**
		 * Set the movies rating
		 */
		movie.setRating(rtresult.mpaa_rating);
		
		/**
		 * Check to see whether the movie is in the users favourites
		 */
		var _favourites = JSON.parse(localStorage.favourites);
		
		for(var i = 0; i < _favourites.length; i++){
			if(_favourites[i].id == movie.getRtid()){
				movie.setFavourite(true);
			}
		}
		
		/**
		 * Add actors to the movie
		 */
		for(var i = 0; i < rtresult.abridged_cast.length; i++){
			var cast = rtresult.abridged_cast[i],
				character = (typeof cast.characters === 'undefined') ? '' : cast.characters[0];
			var actor = new app.model.actor(cast.name, character);
			movie.addActor(actor);
		}
		
		var view = new app.view.movie(movie);
		viewcard.innerHTML = view.render().innerHTML;
		
		app.utility.deck.hideAllCards();
		app.utility.deck.showCard('card-movie_info');
		
	}
	
	this.search = function(query){
	
		if(query.length > 0){
			var jsonp = new app.utility.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=57t3sa6sp5zz5394btptp9ew&q=' + query, 'app.bootstrap.getController("movies").showSearchResults');
			jsonp.send();
			_searchfield.classList.add('loading');
		}

	}
	
	/**
	 * Shows the search results in the search results card
	 */
	this.showSearchResults = function(rtresults){
		
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
			var title = rtmovie.title || '', rtid = rtmovie.id, posterframe = rtmovie.posters.original || '', synopsis = rtmovie.synopsis || '';
			results.push(new app.model.movie(title, rtid, posterframe, synopsis));
		}
		
		// Create the view using the data
		var view = new app.view.movielist(results);
		
		// Set the contents of the search results div
		_searchresultscard.innerHTML = '';
		_searchresultscard.appendChild(view.render());
		_searchresultscard.classList.add('active'); // Controlling pages needs to be handled by it's own utility or class
		_searchfield.classList.remove('loading');
		results = null;
	}
	
	// Any initialization should go here
	
	this.bindSearchForm();
	
}
