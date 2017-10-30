(function() {
	'use strict';


	function getParameterByName(name) {
		var url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}


	function highlightNav() {
		var url = window.location.pathname;
		var urlArr = url.split('/');

		if (urlArr.length < 1) {
      return false; //user is on home page, no highlights needed
    }


		//now first value of url array should be current nav page
		var urlPath = urlArr[1].toLowerCase();

		if (urlPath === 'shop' || urlPath === 'commerce') {

			//highlight 'shop' nav item
			var currNav = document.querySelectorAll('.cn-header__nav__shop');
			for (var i = 0; i < currNav.length; i++) {
				currNav[i].className += ' active';
			}

			if (urlPath === 'commerce') {
				christynatsumiShoppingCart(); //shoppingcart.js
				return false;
			}

      // user is on product desc page, highlight nothing
      if (urlArr.length > 2) {
        return false;
      }

			//look for category parameter, if none, highlight the "all" tab
			var category = getParameterByName('category');

      console.log(urlArr.length);

			if (typeof category !== 'undefined' && category !== null) {
				category = category.toLowerCase();
			} else {
        category = 'all';
			}

      // highlight appropriate category
      var navItem = document.querySelectorAll('.cn-header__sectnav__'+category);
      for (var i = 0; i < navItem.length; i++) {
        navItem[i].className += ' active';
      }

		}


/*
    if (urlPath === 'lookbook') {

      //highlight lookbook being viewed now
      var currLookbook = urlArr[urlArr.length - 1];
      document.querySelectorAll('.cn-header__sectnav__' + currLookbook)[0].className += ' active';


      //highlight 'lookbook' nav item
      document.querySelectorAll('.cn-header__nav__lookbook')[0].className += ' active';
    }
*/
	}

	highlightNav();
}());
