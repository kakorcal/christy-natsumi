//collection of hacks since we dont have access to cart template on squarespace

function christynatsumiShoppingCart() {

	window.addEventListener("load",function(event) {
		//change url for empty cart cta
		document.querySelector('.empty-message a').href = '/shop';
	},false);


	//highlight 'cart' in sectnav
	var navCart = document.querySelectorAll('.cn-header__sectnav__cart');
	for (var i = 0; i < navCart.length; i++) {
		navCart[i].className += ' active';
	}


	//every interval, get images in table and check if the src has been replaced by squarespace
	//if so, loop over and force the large img back in, then re-add mobile titles
	setInterval(function(){
		var imgEl = document.querySelectorAll('.item-image img');
		var qtyInput = document.querySelectorAll('.quantity input');
		var cartSum = 0;

		for (var i = 0; i < imgEl.length; i++) {
			var curr = imgEl[i];
			var str = curr.src;

			if(str.indexOf('400w') !== -1) {
				return false; //image has already been replaced, exit loop
			}

			cartSum = cartSum + parseInt(qtyInput[i].value);

			var str2 = str.replace('100w','400w');
			curr.src = str2;
			curr.style.display = 'block';
		}

		var cartCountEl = document.querySelectorAll('.cn-cart-count');
		for (var i = 0; i < cartCountEl.length; i++) {
			cartCountEl[i].innerHTML = cartSum;
		};

		addTitlesToCartItemsOnMobile();
	}.bind(this), 500);


	//add new title dom elements for mobile layout
	function addTitlesToCartItemsOnMobile() {
		var tableBody = document.querySelector('.cart-container tbody');
		var itemDescs = document.querySelectorAll('.item-desc');
		var itemRows  = document.querySelectorAll('.cart-container tbody tr');

		for (var i = 0; i < itemDescs.length; i++) {
			var node = document.createElement('tr');
			node.className = 'mobileTitle';
			node.innerHTML = '<td colspan="4">'+itemDescs[i].innerHTML+'</td>';
			tableBody.insertBefore(node, itemRows[i]);
		}
	}
}