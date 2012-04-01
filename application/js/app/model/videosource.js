var app = app || {};

app.model = app.model || {};

/**
 * A video source used within a video
 * you must add this object to a video once instantiated
 * @param {String} url
 * @param {app.type.format} format
 */
app.model.videosource = function(url, format){
	
	/**
	 * The video sources instance variables
	 */
	var _url,
		_format;
	
	
	/**
	 * Set the instance variables using the constructors arguments
	 */
	this.setUrl(url);
	this.setFormat(format);
	
	/**
	 * Getters and setters
	 */
	
	/**
	 * Gets the url of the video source
	 * @return {String}
	 */
	this.getUrl = function(){
		return _url;
	}
	
	/**
	 * Sets the url of the video source
	 * @param {String} url
	 */
	this.setUrl = function(url){
		_url = url;
	}
	
	/**
	 * Gets the mimetype of the video source
	 * @return {app.type.format}
	 */
	this.getFormat = function(){
		return _format;
	}
	
	/**
	 * Sets the mimetype of the video source
	 * @param {app.type.format} format
	 */
	this.setFormat = function(format){
		_format = format;
	}
	
}
