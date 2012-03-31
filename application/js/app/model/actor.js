var app = app || {};

app.model = app.model || {};

/**
 * The actor class handles the actors for a movie.
 * Actors should only be included in a full movie listing
 * @param string name
 * @param string photo
 * @param string role
 */
app.model.actor = function(name, photo, role){
	
	/**
	 * The actors instance variables
	 */
	var _name, _photo, _role, _self = this;
	
	/**
	 * Set the instance variables using the constructors arguments
	 */
	this.setName(name);
	this.setPhoto(photo);
	this.setRole(role);
	
	/**
	 * Getters and setters
	 */
	
	/**
	 * Returns the fullname name of the actor
	 * @return string
	 */
	this.getName = function(){
		return _name;
	}
	
	/**
	 * Sets the actors full name
	 * @param string name
	 */
	this.setName = function(name){
		_name = name;
	}
	
	/**
	 * Gets the photo path/url of the actor
	 * @return string
	 */
	this.getPhoto = function(){
		return _photo;
	}
	
	/**
	 * Sets the photo path/url of the actor
	 * @param string photo
	 */
	this.setPhoto = function(photo){
		_photo = photo;
	}
	
	/**
	 * Gets the role of the actor in
	 * relation to the associated film
	 * @return string
	 */
	this.getRole = function(){
		return _role;
	}
	
	/**
	 * Sets the actors role in relation
	 * to the associated film
	 * @param string role
	 */
	this.setRole = function(role){
		_role = role;
	}
		
}
