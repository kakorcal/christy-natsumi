function toggleMiniHeader() {
	var y = window.scrollY;
	var header = document.querySelector('.cn-header');
	var headerHeight = header.offsetHeight;

	var el = document.querySelector('.cn-header--mini');
	if (y > headerHeight) {
		el.classList.add('show');
	}
	else {
		el.className = 'cn-header--mini';
	}
}
toggleMiniHeader();