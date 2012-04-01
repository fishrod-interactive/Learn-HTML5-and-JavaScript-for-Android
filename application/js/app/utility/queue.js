var app = app || {};
app.utility = app.utility || {};

/**
 * A generic queue, you can add objects
 * to the queue, remove them, and check to
 * see whether the queue is empty
 */
app.utility.queue = function(){
	
	/**
	 * Items in the queue
	 */
	var _items = [];
	
	/**
	 * Adds an item to the queue
	 * @param {Object} item
	 */
	this.add = function(item){
		_items.push(item);
	}
	
	/**
	 * Removes an object from the queue
	 * @param {Integer} index
	 */
	this.remove = function(object){
		for(var i = 0; i < _items.length; i++){
			if(_items[i] === object){
				_items.splice(_items[i], 1);
			}
		}
	}
	
	/**
	 * Checks to see whether the queue is empty
	 * @return {boolean}
	 */
	this.isEmpty = function(){
		
		/**
		 * Checks the length of items
		 * if it's 0 then it returns true
		 */
		if(_items.length == 0){
			return true;
		}
		
		/**
		 * If it's not, then it returns false
		 */
		return false;
	}
	
	/**
	 * Returns the number of items in the queue
	 * @return {Integer}
	 */
	this.items = function(){
		return _items.length;
	}
	
	/**
	 * Returns all items in the queue
	 * @return {Array}
	 */
	this.getItems = function(){
		return _items;
	}
}
