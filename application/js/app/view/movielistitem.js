var app = app || {};
app.view = app.view || {};

/**
 * Creates a new view for a movie list item
 * @param {app.model.movielistitem} movie
 */
app.view.movielistitem = function(movie){
							<li>
							<video class="teaser" poster="img/video.jpg" title="Movie Title">
								<source type="video/webm" src="path/to/video.webm" />
							</video>
							<a data-method="push" class="more" href="movie/view/10">
								<h2>My Movie Title</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et dolor nisi, vel imperdiet tortor. Sed sollicitudin lectus justo. Morbi nec velit est, vitae pretium ante. Nullam vel massa massa. Ut erat ante, sollicitudin vitae convallis at, facilisis sit amet turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis elementum tellus, eget vestibulum sem viverra in. Proin non tortor urna. Duis sodales tellus quis dolor viverra tempor. Nulla malesuada, massa quis ultrices pulvinar, risus odio vehicula est, quis mattis tortor neque at libero. Curabitur tristique sodales arcu ut auctor. Ut hendrerit, turpis eu consequat.</p>
							</a>
						</li>

	var _movie = movie,
		_rootElement = document.createElement('li');
		
	var _link = document.createElement('a');

	this.render = function(){
		return _rootElement;
	}
}
