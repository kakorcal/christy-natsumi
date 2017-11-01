/**
 * A basic JavaScript file that refreshes the Squarespace ImageLoader. For more
 * information about writing custom JavaScript on a Squarespace developer site
 * visit the link below.
 * @see http://developers.squarespace.com/custom-javascript/
 *
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */
(function() {
  'use strict';

  // Stop the script if the user is on an old browser.
  // Browser support: http://caniuse.com/#search=queryselectorall
  if (!document.querySelectorAll) {
    return;
  }

  // {shoppingCart.totalQuantity} was caching cart count, so we have to do this dumb interval
  // instead to get the count from the official squarespace ui element and put it into ours
  var cartInterval = setInterval(function(){
    var cartEl = document.querySelector('.sqs-pill-shopping-cart-content .total-quantity') || null;

    if (cartEl) {
      var squareSpaceCartCount = cartEl.innerText;
      var cartCountEl = document.querySelectorAll('.cn-cart-count');

      for (var i = 0; i < cartCountEl.length; i++) {
        cartCountEl[i].innerHTML = squareSpaceCartCount;
      }
    }
  }, 500);


  /**
   * Loads all images on the page using Squarespace's Responsive ImageLoader.
   *
   * @method loadImages
   * @see http://developers.squarespace.com/using-the-imageloader/
   * @deprecated cannot use on shopify platform
   */
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]');

    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i]);
    }
  }


  //only construct Instafeed on home page, where script has been included
  /*
  if (typeof Instafeed !== 'undefined') {
    var feed = new Instafeed({
      get: 'user',
      limit: 7,
      userId: 178110804,
      clientId: '54db78126f764a879ba681b4a9db8140',
      accessToken: '178110804.54db781.e9695f2f1ddf4ce6b68cf91798e131e9',
      template: '<a class="fx-allFast" href="{{link}}" style="background-image:url({{image}})" target="_blank"></a>',
      resolution: 'low_resolution'
    });
    feed.run();
  }
  */

  /*
    window.addEventListener('resize', loadAllImages);
   */


  window.onscroll = function() {
    if (typeof toggleMiniHeader !== 'undefined') {
      toggleMiniHeader();
    }
    if (typeof highlightCustomNav !== 'undefined') {
      highlightCustomNav();
    }
    if (typeof checkProductListImages !== 'undefined') {
      checkProductListImages();
    }
  };


  document.getElementById('cn-mobileNav__drawerBtn').addEventListener('click', function(){
    document.getElementById('cn-mobileNav').classList.toggle('open');
  });


}());
