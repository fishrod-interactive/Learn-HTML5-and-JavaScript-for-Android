var app = app || {};

app.bootstrap = (function(){

	var _controller = {
		movies: {
			search: null
		}
	}
	
	return {
		getController: function(name){
			
			var parts = name.split('.');
			var returnController = null;
			
			if(parts.length > 0){
				returnController = _controller;
				for(var i = 0; i < parts.length; i++){
					returnController = returnController[parts[i]];
				}
			}
			
			return returnController;
		},
		initScripts: function(){
			_controller.movies.search = new app.controller.movies.search('#add-movie input[name="query"]');
		}
	}
	
})();
