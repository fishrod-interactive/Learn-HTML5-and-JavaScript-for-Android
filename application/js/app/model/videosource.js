var app = app || {};

app.model = app.model || {};

/**
 * A video source used within a video
 * you must add this object to a video once instantiated
 * @param string url
 * @param string mimetype
 * @param string format
 */
app.model.videosource = function(url, mimetype, format){
	
	/**
	 * The video sources instance variables
	 */
	var _url, _mimetype, _format;
	
	
	/**
	 * Set the instance variables using the constructors arguments
	 */
	this.setUrl(url);
	this.setMimetype(mimetype);
	this.setFormat(format);
	
	/**
	 * Getters and setters
	 */
	
	/**
	 * Gets the url of the video source
	 * @return url
	 */
	this.getUrl = function(){
		return _url;
	}
	
	/**
	 * Sets the url of the video source
	 * @param string url
	 */
	this.setUrl = function(url){
		_url = url;
	}
	
	/**
	 * Gets the mimetype of the video source
	 * @return string mimetype
	 */
	this.getMimetype = function(){
		return _mimetype;
	}
	
	/**
	 * Sets the mimetype of the video source
	 * @param string mimetype
	 */
	this.setMimetype = function(mimetype){
		_mimetype = mimetype;
	}
	
	/**
	 * Gets the format of the video
	 * @return string format
	 */
	this.getFormat = function(){
		return _format;
	}
	
	/**
	 * Sets the format of the video
	 * @param string format
	 */
	this.setFormat = function(format){
		_format = format;
	}
}
