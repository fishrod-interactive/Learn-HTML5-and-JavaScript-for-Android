var app = app || {};

app.model = app.model || {};

/**
 * A listing associated with a movie. This constructor accepts
 * the cinema name, location (app.type.location), address
 * times (array)
 * @param {String} cinema
 * @param {app.type.location} location
 * @param {String} address
 * @param {Array} times
 */
app.model.listing = function(cinema, location, address, times){
	
	/**
	 * The listing instance variables
	 */
	var _cinema,
		_location = {},
		_address,
		_times = [];
	
	/**
	 * Set the instance variables using the constructors arguments
	 */
	this.setCinema(cinema);
	this.setLocation(location);
	this.setAddress(address);
	this.setTimes(times);
	
	/**
	 * Getters and setters
	 */
	
	/**
	 * Gets the cinema name
	 * @return {String}
	 */
	this.getCinema = function(){
		return _cinema;
	}
	
	/**
	 * Sets the cinema name
	 * @param {String} cinema
	 */
	this.setCinema = function(cinema){
		_cinema = cinema;
	}
	
	/**
	 * Gets the location
	 * @return {app.type.location}
	 */
	this.getLocation = function(){
		return _location;
	}
	
	/**
	 * Sets the location of the listing
	 * @param {app.type.location} location
	 */
	this.setLocation = function(location){
		_location = location;
	}
	
	/**
	 * Gets the address of the cinema
	 * @return {String}
	 */
	this.getAddress = function(){
		return _address;
	}
	
	/**
	 * Sets the address of the cinema
	 * @param {String} address
	 */
	this.setAddress = function(address){
		_address = address;
	}
	
	/**
	 * Gets the times of the cinema listing
	 * @return {Array}
	 */
	this.getTimes = function(){
		return _times;
	}
	
	/**
	 * Sets the times for the cinema listing
	 * @param {Array} times
	 */
	this.setTimes = function(times){
		_times = times;
	}
}
