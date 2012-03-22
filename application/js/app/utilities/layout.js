var app = app || {};

app.utilities = app.utilities || {};

app.utilities.layout = (function(){
	
	var fixdeckheight = function(){
	
		[].forEach.call(document.getElementsByClassName('deck'), function(el){
			el.style.height = (document.body.offsetHeight - document.getElementById('taskbar').offsetHeight) + 'px';
		});
		
	};
	
	
	fixdeckheight();	
	
})();
