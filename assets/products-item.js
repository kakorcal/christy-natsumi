(function() {
	'use strict';


	function thumbnailClickEvent() {
		var productTn = document.querySelectorAll('.cn-product__tnContainer__tn');

		for (var i = 0; i < productTn.length; i++) {
			productTn[i].addEventListener('click', function(){
				var clicked = this.dataset.index-1;
				var slides = document.querySelectorAll('.cn-product__mask__slide');

				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
				}
				slides[clicked].classList.add('active');
			}, false);
		}
	}


	function productSelectChangeEvent() {
		var el = document.querySelectorAll('.variant-select-wrapper select');

		for (var i = 0; i < el.length; i++) {
			el[i].addEventListener('change', function(){
				var product = document.querySelector('.product-variants');

				setTimeout(function(){
					var selected = product.dataset.selectedVariant;
					if (typeof selected !== 'undefined') {
						var selectedData = JSON.parse(selected);

						//if sale or soldout, show .product-mark, else hide. crossout old price?
						if (selectedData.qtyInStock < 1) {
							//product-mark
							//.variant-out-of-stock
						}

						var money = selectedData.onSale ? selectedData.salePrice : selectedData.price;
						var moneyWithDecimal = insertDecimal(money);
						var moneyEl = document.querySelector('.sqs-money-native');
						moneyEl.innerHTML = moneyWithDecimal;
					}
				}, 200);

			}, false);
		}
	}


	function insertDecimal(num) {
		return (num / 100).toFixed(2);
	}


	//hide thumbnails if only 1 image
	// @deprecated
	function checkThumbnailCount() {
		var arr = document.querySelectorAll('.cn-product__tnContainer__tn');

		if (arr.length < 2 ) {
			var el = document.querySelector('.cn-product__tnContainer');
			el.style.display = 'none';
		}
	}

/*
	// we are now just checking the official squarespace ui element

	//updates cart count UI to reflect new quantity
	function addToCartEvent() {
		var el = document.querySelector('.sqs-add-to-cart-button');
		var clickInterval;

		el.addEventListener('click', function(){

			if (typeof clickInterval !== 'undefined') {
				clearInterval(clickInterval);
			}

			clickInterval = setInterval(function(){
				if (this.classList.contains('cart-added')) {
					var cartCountEl = document.querySelectorAll('.cn-cart-count');
					var count = cartCountEl[0].innerHTML;
					var qty = document.querySelector('.quantity-label').nextElementSibling.value;
					var sum = parseInt(count, 10) + parseInt(qty, 10);

					for (var i = 0; i < cartCountEl.length; i++) {
						cartCountEl[i].innerHTML = sum;
					};

					clearInterval(clickInterval);
				}

			}.bind(this), 500);
		});
	}
*/


	//addToCartEvent();
	// checkThumbnailCount();
	thumbnailClickEvent();
	productSelectChangeEvent();
}());