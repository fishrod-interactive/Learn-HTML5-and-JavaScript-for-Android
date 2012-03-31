var app = app || {};

app.model = app.model || {};

/**
 * A video associated with a movie.
 * You must add video sources in order for videos to play
 * @param string title
 * @param integer length
 * @param string posterframe
 */

app.model.video = function(title, length, posterframe){

	/**
	 * The videos instance variables
	 */
	var _title, _length, _posterframe, _self = this;
	
	/**
	 * Set the instance variables using the constructors arguments
	 */
	this.setTitle(title);
	this.setLength(length);
	this.setPosterframe(posterframe);
	
	/**
	 * The getters and setters
	 */
	
	/**
	 * Gets the title of the video
	 * @return string
	 */
	this.getTitle = function(){
		return _title;
	}
	
	/**
	 * Sets the title of the video
	 * @param string title
	 */
	this.setTitle = function(title){
		_title = title;
	}
	
	/**
	 * Gets the length of the video in milliseconds
	 * @return integer
	 */
	this.getLength = function(){
		return _length;
	}
	
	/**
	 * Sets the length of the video in milliseconds
	 * @param integer length
	 */
	this.setLength = function(length){
		/**
		 * Use parseInt here just to
		 * ensure the length is an integer. If it's not, the
		 */
		_length = parseInt(length);
	}

}