var app = app || {};

app.utility = app.utility || {};

app.utility.layout = (function(){
	
	var fixdeckheight = function(){
	
		[].forEach.call(document.getElementsByClassName('deck'), function(el){
			el.style.height = (document.body.offsetHeight - document.getElementById('taskbar').offsetHeight) + 'px';
		});
		
	};
	
	var timeout;
	
	window.addEventListener('resize', function(){
		clearTimeout(timeout);
		timeout = setTimeout(function(){ fixdeckheight(); }, 100);
	});
	
	fixdeckheight();	
	
})();
