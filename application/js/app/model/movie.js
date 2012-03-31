var app = app || {};

app.model = app.model || {};

/**
 * A movie model used for all movies within the application
 * @param string title
 * @param string imdbref
 * @param string posterframe
 * @param string synopsis
 */
app.model.movie = function(title, IMDBRef, posterframe, synopsis) {
	
	/**
	 * The videos instance variables
	 */
	var _title, _IMDBRef, _posterframe, _synopsis, _self = this;
	
	/**
	 * Set the instance variables using the constructors arguments
	 */
	this.setTitle(title);
	this.setIMDBRef(imdbref);
	this.setPosterframe(posterframe);
	this.setSynopsis(synopsis);

	/**
	 * Getters and setters
	 */

	/**
	 * Returns the movie title
	 * @return string
	 */
	this.getTitle = function(){
		return _title;
	}
	
	/**
	 * Sets the movie title
	 * @param string title
	 */
	this.setTitle = function(title){
		_title = title;
	}
	
	/**
	 * Returns the IMDB database reference ID
	 * @return string
	 */
	this.getIMDBRef = function(){
		return _IMDBRef;
	}
	
	/**
	 * Sets the IMDB database reference ID
	 * @param string IMDBRef
	 */
	this.setIMDBRef = function(IMDBRef){
		_IMDBRef = IMDBRef;
	}
	
	/**
	 * Gets the posterframe URL/Path
	 * @return string
	 */
	this.getPosterframe = function(){
		return _posterframe;
	}
	
	/**
	 * Sets the posterframe URN/Path
	 * @param string posterframe
	 */
	this.setPosterframe = function(posterframe){
		_posterframe = posterframe;
	}
	
	/**
	 * Gets the synopsis as a string with no HTML formatting
	 * @return string
	 */
	this.getSynopsis = function(){
		return _synopsis;
	}
	
	/**
	 * Sets the synopsis, a string with no HTML must be passed
	 * @param string synopsis
	 */
	this.setSynopsis = function(synopsis){
		_synopsis = synopsis;
	}
}
