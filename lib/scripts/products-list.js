//lazy loading product images
function checkProductListImages() {
	//Y is the global Yahoo YUI object. if squarespace drops YUI we need to refactor this

	// Create an array and push all add all images in the viewport to the array.
	var imgs = [];
	Y.all('img[data-src]:not([src])').each(function(img) {
		if (img.inRegion(Y.DOM.viewportRegion())) {
			imgs.push(img);
		}
	});

	// Load the eligible images and remove the data-load attributes from them.
	imgs.forEach(function(img) {
		img.getDOMNode().addEventListener('load', function() {
			Y.one(img).ancestor().addClass('show');
		}, false);

		ImageLoader.load(img.removeAttribute('data-load'));
	});
}

(function() {
	'use strict';
	checkProductListImages();
}());