var app = app || {};

app.utility = app.utility || {};

app.utility.paging = (function(){
	
	document.addEventListener("click", function(event){

		var target = event.target;
				
		while(target.nodeName !== "A" && target.getAttribute('data-paging-method') !== "push"){
			// We've reached the body element break!
			if(target.parentNode.nodeName == 'HTML'){
				target = null;
				break;
			}
			target = target.parentNode;
		}
		
		if(target){
			
		}
		
		event.preventDefault();
	});
	
	/*
	[].forEach.call(document.querySelectorAll('a[data-method="push"]'), function(el){
		el.addEventListener("click", function pushCard(event){
			var pageid = this.href.hash;
			goToCard(pageid);
			event.preventDefault();
		});
	});
			
			function goToCard(to){	
				document.querySelectorAll('.card.active')[0].classList.remove('active');
				document.querySelectorAll(to)[0].classList.add('active');
			}
			*/
	
	return {
		goToCard: function goToCard(path){
			
		}	
	}
	
})();
