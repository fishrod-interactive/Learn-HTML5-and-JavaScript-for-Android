var app = app || {};

app.model = app.model || {};

/**
 * A movie model used for all movies within the application
 * 
 * @alias app.model.movie
 * @constructor
 * @param {String} title
 * @param {String} imdbref
 * @param {String} posterframe
 * @param {String} synopsis
 */
app.model.movie = function(title, IMDBRef, posterframe, synopsis) {
	
	/**
	 * The videos instance variables
	 */
	var _title,
		_IMDBRef,
		_posterframe,
		_synopsis,
		_releaseDates = {
			cinema: null,
			dvd: null
		},
		_listings = [],
		_videos = [],
		_actors = [],
		_self = this;

	/**
	 * Getters and setters
	 */

	this.init = function(){
		/**
		 * Set the instance variables using the constructors arguments
		 */
		this.setTitle(title);
		this.setIMDBRef(IMDBRef);
		this.setPosterframe(posterframe);
		this.setSynopsis(synopsis);
	}

	/**
	 * Returns the movie title
	 * @return {String}
	 */
	this.getTitle = function(){
		return _title;
	}
	
	/**
	 * Sets the movie title
	 * @param {String} title
	 */
	this.setTitle = function(title){
		_title = title;
	}
	
	/**
	 * Returns the IMDB database reference ID
	 * @return {String}
	 */
	this.getIMDBRef = function(){
		return _IMDBRef;
	}
	
	/**
	 * Sets the IMDB database reference ID
	 * @param {String} IMDBRef
	 */
	this.setIMDBRef = function(IMDBRef){
		_IMDBRef = IMDBRef;
	}
	
	/**
	 * Gets the posterframe URL/Path
	 * @return {String}
	 */
	this.getPosterframe = function(){
		return _posterframe;
	}
	
	/**
	 * Sets the posterframe URN/Path
	 * @param {String} posterframe
	 */
	this.setPosterframe = function(posterframe){
		_posterframe = posterframe;
	}
	
	/**
	 * Gets the synopsis as a string with no HTML formatting
	 * @return {String}
	 */
	this.getSynopsis = function(){
		return _synopsis;
	}
	
	/**
	 * Sets the synopsis, a string with no HTML must be passed
	 * @param {String} synopsis
	 */
	this.setSynopsis = function(synopsis){
		_synopsis = synopsis;
	}
	
	/**
	 * Gets all listings associated with the movie
	 * @return {Array}
	 */
	this.getListings = function(){
		return _listings;
	}
	
	/**
	 * Sets all listings associated with a movie
	 * @param {Array} listings
	 */
	this.setListings = function(listings){
		/**
		 * Rather than setting the listings all in one go
		 * you use the addListing method which can handle
		 * any validation for each listing before it's
		 * added to the object
		 */
		for(var i = 0; i < listings.length; i++){
			_self.addListing(listings[i]);
		}
	}
	
	/**
	 * Adds a listing to the movie
	 * @param {app.model.listing} listing
	 */
	this.addListing = function(listing){
		/**
		 * You can add any listing validation here
		 * before it's added to the movie
		 */
		_listings.push(listing);
	}
	
	/**
	 * Gets all videos associated with the movie
	 * @return {Array}
	 */
	this.getVideos = function(){
		return _videos;
	}
	
	/**
	 * Sets all videos associated with the movie
	 * @param {Array}
	 */
	this.setVideos = function(videos){
		/**
		 * Rather than setting the videos all in one go
		 * you use the addVideo method which can handle
		 * any validation for each video before it's
		 * added to the object
		 */
		for(var i = 0; i < videos.length; i++){
			_self.addVideo(videos[i]);
		}
	}
	
	/**
	 * Adds a video to the movie
	 * @param {app.model.video} video
	 */
	this.addVideo = function(video){
		/**
		 * You can add any video validation here
		 * before it's added to the movie
		 */
		_videos.push(video);
	}
	
	/**
	 * Gets all actors associated with the movie
	 * @return {Array}
	 */
	this.getActors = function(){
		return _actors;
	}
	
	/**
	 * Sets all actors associated with the movie
	 * @param {Array}
	 */
	this.setActors = function(actors){
		/**
		 * Rather than setting the actors all in one go
		 * you use the addActor method which can handle
		 * any validation for each actor before it's
		 * added to the object
		 */
		for(var i = 0; i < actors.length; i++){
			_self.addActor(actors[i]);
		}
	}
	
	/**
	 * Adds an actor to the movie
	 * @param {app.model.actor} actor
	 */
	this.addActor = function(actor){
		/**
		 * You can add any actor validation here
		 * before it's added to the movie
		 */
		_actors.push(actor);
	}
	
	/**
	 * Gets the cinema release date
	 * @return {Date}
	 */
	this.getCinemaReleaseDate = function(){
		return _releaseDates.cinema;
	}
	
	/**
	 * Sets the cinema release date
	 * @param {Date} date
	 */
	this.setCinemaReleaseDate = function(date){
		_releaseDates.cinema = date;
	}
	
	/**
	 * Gets the DVD release date
	 * @return {Date}
	 */
	this.getDVDReleaseDate = function(){
		return _releaseDates.dvd;
	}
	
	/**
	 * Sets the DVD release date
	 * @param {Date} date
	 */
	this.setDVDReleaseDate = function(date){
		_releaseDates.dvd = date;
	}
	
	/**
	 * Gets all release dates
	 * @return {_releaseDates}
	 */
	this.getReleaseDates = function(){
		return _releaseDates;
	}
	
	this.init();
	
}
