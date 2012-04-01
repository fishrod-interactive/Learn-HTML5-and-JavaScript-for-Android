var app = app || {};

app.model = app.model || {};

/**
 * A video associated with a movie.
 * You must add video sources in order for videos to play
 * @param {String} title
 * @param {Integer} length
 * @param {String} posterframe
 */

app.model.video = function(title, length, posterframe){

	/**
	 * The videos instance variables
	 */
	var _title,
		_length,
		_posterframe,
		_sources = [],
		_self = this;
	
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
	 * @return {String}
	 */
	this.getTitle = function(){
		return _title;
	}
	
	/**
	 * Sets the title of the video
	 * @param {String} title
	 */
	this.setTitle = function(title){
		_title = title;
	}
	
	/**
	 * Gets the length of the video in milliseconds
	 * @return {Integer}
	 */
	this.getLength = function(){
		return _length;
	}
	
	/**
	 * Sets the length of the video in milliseconds
	 * @param {Integer} length
	 */
	this.setLength = function(length){
		/**
		 * Use parseInt here just to
		 * ensure the length is an integer. If it's not, the
		 */
		_length = parseInt(length);
	}
	
	/**
	 * Gets all of the video sources used for embedding video
	 * in POSH
	 * @return {Array}
	 */
	this.getSources = function(){
		return _sources;
	}
	
	/**
	 * Sets all video sources using an array
	 * @param {Array} sources
	 */
	this.setSources = function(sources){
		/**
		 * Rather than setting the sources all in one go
		 * you use the addSource method which can handle
		 * any validation for each source before it's
		 * added to the object
		 */
		for(var i = 0; i < sources.length; i++){
			_self.addSource(sources[i]);
		}
	}
	
	/**
	 * Adds a source to the sources array
	 * @param {app.model.videosource} source
	 */
	this.addSource = function(source){
		_sources.push(source);
	}

}