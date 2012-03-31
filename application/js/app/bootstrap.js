var app = app || {};

app.bootstrap = (function(){

	var controller = {
		movies: {
			search: null
		}
	};
	controller.movies.search = new app.controller.movies.search('#add-movie input[name="query"]');

	return {
		getController: function(name){
			
			var parts = name.split('.');
			var returnController = null;
			
			if(parts.length > 0){
				returnController = controller;
				for(var i = 0; i < parts.length; i++){
					returnController = returnController[parts[i]];
				}
			}
			
			return returnController;
		}
	}
	
})();
