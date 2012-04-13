var app = app || {};

app.bootstrap = (function(){

	var _controller = {
		movies: null,
		favourites: null
	}
	
	document.addEventListener("click", function(event){

		var target = event.target;
				
		while(target.nodeName !== "A" && target.getAttribute('data-controller') == null && target.getAttribute('data-action') == null){
			// We've reached the body element break!
			if(target.parentNode.nodeName == 'HTML'){
				target = null;
				break;
			}
			target = target.parentNode;
		}
		
		
		if(target){
			/**
			 * You have the target link so it makes sense to prevent the link from following through now
			 * this will allow any JavaScript to fail silently!
			 */ 
			
			event.preventDefault();
			
			var controller = target.getAttribute('data-controller'), action = target.getAttribute('data-action'), params = target.getAttribute('data-params');
			
			if(typeof _controller[controller] === 'undefined' || typeof _controller[controller][action] === 'undefined'){
				throw "Action " + action + " for controller " + controller + " doesn't appear to exist";
				return;
			}
			
			if(params){
				console.log(params);
				try {
					params = JSON.parse(params);
				} catch (e) {
					console.log(e);
					return;
				}
			
			}			

			_controller[controller][action].call(target, params);

		}
		
	});
	
	if(!localStorage.getItem('favourites')){
		var favourites = [];
		localStorage.favourites = JSON.stringify(favourites);
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
			_controller.movies = new app.controller.movies();
			_controller.favourites = new app.controller.favourites();
			_controller.favourites.list();
		}
	}
	
})();
