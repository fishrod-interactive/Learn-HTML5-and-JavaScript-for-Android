var app = app || {};

app.controller = app.controller || {};

app.controller.movies = function(){
	
	var _self = this,
		_ajaxRequest = new XMLHttpRequest();
	
	this.add = function (movie){
				
	}
	
	this.initSearch = function (){
		
		var element = document.querySelector('#add-movie input[name="query"]');
		element.addEventListener('keyup', function(){
			_self.search(this.value);
		});
		
	}
	
	this.search = function(query){
		
		/**
		 * Only make a search if the number of characters
		 * are more than 3
		 */
		if(query.length > 3){
			
			/**
			 * Cancel the current HTTP request if there is any
			 */
			// _ajaxRequest.abort();
			
			var uri = 'http://www.imdbapi.com/?t=' + query;
			
			_ajaxRequest.open('GET', uri, true);
			
			_ajaxRequest.onreadystatechange = function(){
			
				if(this.readyState === this.DONE){
					
					if(this.status == 200){
						console.log(this.responseText);
					} else {
						console.log('Something went wrong');
					}
					
				}
	
			}
			
			_ajaxRequest.send(null);
			
		}
		
	}
	
	this.view = function (id) {
		
	}
	
	this.initSearch();
	
};