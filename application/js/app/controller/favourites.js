var app = app || {};

app.controller = app.controller || {};

app.controller.favourites = function(){
	
	var _listScroll = null;
	
	this.add = function(data){
		
		var _movie = data;
		var _favourites = JSON.parse(localStorage.favourites);
		
		/**
		 * Check to see whether the movie
		 * is already in the users favourites
		 */
		for(var i = 0; i < _favourites.length; i++){
			if(_favourites[i].id == _movie.id){
				return;
			}
		}
		
		/**
		 * Change the buttons attributes
		 */
		if(this.nodeName == 'A'){
			this.setAttribute('data-action', 'remove');
			this.classList.remove('add');
			this.classList.add('remove');
			this.innerText = 'un-favourite';
		}
		
		_favourites.push(_movie);
		
		localStorage.favourites = JSON.stringify(_favourites);
		
	}
	
	this.list = function(){
		
		var _favourites = JSON.parse(localStorage.favourites),
			_movies = [],
			_favouriteslist = document.getElementById('card-favourite_list');
		
		for(var i = _favourites.length; i > 0; i--){
			var _favourite = _favourites[i - 1];
			_movies.push(new app.model.movie(unescape(_favourite.title), _favourite.id, _favourite.posterframe, unescape(_favourite.synopsis)))
		}
		
		var view = new app.view.movielist(_movies);
				
		// Set the contents of the search results div
		_favouriteslist.innerHTML = '';
		_favouriteslist.appendChild(view.render());

		if(_listScroll !== null){
			_listScroll.destroy();
			_listScroll = null;
		}
		
		_listScroll = new iScroll(_favouriteslist);

		app.utility.deck.hideAllCards();
		app.utility.deck.showCard('card-favourite_list');
		
	}
	
	this.remove = function(data){
		var _id = data.id;
		var _favourites = JSON.parse(localStorage.favourites);
		
		for(var i = 0; i < _favourites.length; i++){
			if(_favourites[i].id == _id){
				_favourites.splice(i, 1);
			}
		}
		
		localStorage.favourites = JSON.stringify(_favourites);
		
		/**
		 * Change the buttons attributes
		 */
		if(this.nodeName == 'A'){
			this.setAttribute('data-action', 'add');
			this.classList.remove('remove');
			this.classList.add('add');
			this.innerText = 'favourite';
		}
		
	}
	
}
