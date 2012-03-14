var app = app || {};

app.playButton = function(id, track){
	
	var canvas = document.getElementById(id);
	var	context = canvas.getContext('2d'),
		center = {
			x: (canvas.offsetHeight / 2),
			y: (canvas.offsetHeight / 2)
		},
		dimensions = {
			width: (canvas.offsetWidth),
			height: (canvas.offsetHeight)
		},
		track = track,
		_self = this;
	
	/**
	 * Track callback methods
	 */
	track.callbacks.didUpdateTime = function(time){
		_self.draw();
	};
	
	track.callbacks.didPause = function(){
		_self.draw();
	}
	
	/**
	 * Track controls
	 */
	
	this.togglePlay = function(){
		
		switch(track.getCurrentState()){
			case track.state.STOPPED:
			case track.state.PAUSED:
				_self.play();
				break;
			case track.state.PLAYING:
				_self.stop();
				break;
		}
		
	}

	this.play = function(){
		track.play();
	};
	
	this.stop = function(){
		track.pause();
	};

	this.drawStop = function(){
		var width = 20,
			height = 20,
			x = (dimensions.width / 2) - (width / 2),
			y = (dimensions.height / 2) - (height / 2);
			
		context.beginPath();
		context.rect(x, y, width, height);
		context.fillStyle = '#A0A0A0';
		context.fill();
	};
	
	this.drawPlay = function(){
		var width = 20,
			height = 20,
			x = ((dimensions.width / 2) + 2) - (width / 2),
			y = (dimensions.height / 2) - (height / 2);
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + width, (dimensions.height / 2));
		context.lineTo(x, (y + height))
		context.fillStyle = '#A0A0A0';
		context.fill();
	};
	
	this.draw = function(){
		// Draw the progress bar based on the
		// current time and total time of the track
		var percentage = 100 - ((track.getCurrentTime() / track.getLength()) * 100);
		var endDegree = percentage * (2 / 100);
		
		context.clearRect(0, 0, dimensions.width, dimensions.height);
		
		context.beginPath();
		context.arc(center.x, center.y, (dimensions.height / 2) - 10, 0, 2 * Math.PI, false);
		context.closePath();
		context.fillStyle = '#000000';
		context.fill();
		
		context.beginPath();
		context.arc(center.x, center.y, (dimensions.height / 2) - 20, 0, 2 * Math.PI, false);
		context.lineWidth = 5;
		context.strokeStyle = "#FFFFFF";
		context.stroke();
		
		context.beginPath();
		context.arc(center.x, center.y, (dimensions.height / 2) - 20, 0 * Math.PI, endDegree * Math.PI, false);
		context.lineWidth = 5;
		context.strokeStyle = "#A8A8A8";
		context.stroke();

		switch(track.getCurrentState()){
			case track.state.PAUSED:
			case track.state.STOPPED:
				this.drawPlay();
				break;
			case track.state.PLAYING:
				this.drawStop();
				break;
		}
		
	};
	
	this.draw();
};

app.track = function(length){
	
	this.state = {
		STOPPED: 0,
		PLAYING: 1,
		PAUSED: 2
	};
	
	var length = (length * 1000),
		currentTime = 0,
		interval,
		_self = this,
		state = this.state.STOPPED,
		updateInterval = 1000 / 30;
	
	var updateTime = function(){
		
		if(currentTime < length){
			_self.setCurrentTime(currentTime + updateInterval);
		} else {
			_self.stop();
		}
				
	};
	
	this.getCurrentState = function(){
		return state;
	};
	
	this.setCurrentTime = function(time){
		currentTime = time;
		_self.callbacks.didUpdateTime.call(_self, currentTime);
	};
	
	this.getState = function(){
		return this.currentState;
	};
	
	this.stop = function(){
		window.clearInterval(interval);
		state = this.state.STOPPED;
		this.setCurrentTime(0);
		this.callbacks.didStop.call(this);
	};
		
	this.play = function(){
		if(state != this.state.PLAYING){
			interval = window.setInterval(updateTime, updateInterval);
			state = this.state.PLAYING;
			this.callbacks.didStartPlaying.call(this);
		}
	};
	
	this.pause = function(){
		window.clearInterval(interval);
		state = this.state.PAUSED;
		this.callbacks.didPause.call(this);
	};
	
	this.getLength = function(){
		return length;
	};
	
	this.getCurrentTime = function(){
		return currentTime;
	};

	this.callbacks = {
				didUpdateTime: function(time){},
				didStartPlaying: function(){},
				didPause: function(){},
				didStop: function(){}
	};
	
};