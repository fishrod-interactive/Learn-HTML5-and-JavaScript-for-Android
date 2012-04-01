var app = app || {};

app.type = app.type || {};

/**
 * The location app type,
 * The constructor takes latitude and longitude
 * @param {Float} latitude
 * @param {Float} longitude
 */

app.type.location = function(latitude, longitude){
	
	/**
	 * The locations's instance variables
	 */
	var _latitude,
		_longitude;
	
	/**
	 * Set the instance variables using the constructors arguments
	 */
	this.setLatitude(latitude);
	this.setLogitude(longitude);
	
	/**
	 * Getters and setters
	 */
	
	/**
	 * Gets the latitude of the location
	 * @return {Float}
	 */
	this.getLatidude = function(){
		return _latitude;
	}
	
	/**
	 * Sets the latitude of the location
	 * @param {Float} latitude
	 */
	this.setLatitude = function(latitude){
		_latitude = latitude;
	}
	
	/**
	 * Gets the longitude of the location
	 * @return {Float}
	 */
	this.getLongitude = function(){
		return _longitude;
	}
	
	/**
	 * Sets the longitude of the location
	 * @param {Float} longitude
	 */
	this.setLongitude = function(longitude){
		_longitude = longitude;
	}
}
