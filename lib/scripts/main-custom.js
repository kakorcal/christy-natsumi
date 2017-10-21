var anchors = document.querySelectorAll('.cn-anchor');
var tabs = document.querySelectorAll('.cn-header--mini .cn-header__sectnav__custom');

function highlightCustomNav() {
	var count = 0;

	for (var i = 0; i < anchors.length; i++) {
		var el = anchors[i].getBoundingClientRect();
		var elY = el.top;

		if (elY < 10) {
			count++;
		}
	}

	for (var i = 0; i < tabs.length; i++) {
		tabs[i].className = 'cn-header__sectnav__custom';
	}

	count = count-1 < 0 ? 0 : count-1;

	//update web section nav
	tabs[count].className = 'cn-header__sectnav__custom active';

	//update mobile fixed header nav
	document.getElementById('cn-mobileFixedHeader__nav').selectedIndex = count;
}


function createCustomSelectNav() {
	var tabLinks = document.querySelectorAll('.cn-header--mini .cn-header__sectnav__custom a');
	var mobileHeader = document.createElement('div');
		mobileHeader.id = 'cn-mobileFixedHeader';
	var mobileHeaderTitle = document.createElement('h3');
		mobileHeaderTitle.innerText = 'Custom:';
	var select = document.createElement('select');
		select.id = 'cn-mobileFixedHeader__nav';

	for (var i = 0; i < tabLinks.length; i++) {
		var href = tabLinks[i].href;
		var name = tabLinks[i].innerHTML;

		select.innerHTML += '<option value="'+href+'">'+name+'</option>';
	}

	mobileHeader.appendChild(mobileHeaderTitle);
	mobileHeader.appendChild(select);

	select.addEventListener('change',function(e){
		location.href = e.target.value;
	});

	var mobileNav = document.querySelector('.cn-mobileNav');
	document.body.insertBefore(mobileHeader, mobileNav);

	var header = document.querySelector('.cn-header');
	header.className += ' cn-header--mobileFixedHeader';
}


createCustomSelectNav();
highlightCustomNav();
