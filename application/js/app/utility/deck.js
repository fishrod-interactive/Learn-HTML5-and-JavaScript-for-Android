var app = app || {};

app.utility = app.utility || {};

app.utility.deck = (function(){
	
	var _cards = document.getElementsByClassName('card');

	return {
		showCard: function(id){
			document.getElementById(id).classList.add('active');
		},
		hideCard: function(id){
			document.getElementById(id).classList.remove('active');
		},
		hideAllCards: function(){
			for(var i = 0; i < _cards.length; i++){
				_cards[i].classList.remove('active');
			}
		}
	}
	
})();
